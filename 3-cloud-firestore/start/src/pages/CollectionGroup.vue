<script setup>
import { onMounted, reactive, onBeforeUnmount } from 'vue';
import ExpenseExcersize from '../components/ExpenseExcersize.vue'
import { getFirebase } from '../firebase';
import { collection, onSnapshot, limit, query, where, orderBy, collectionGroup } from 'firebase/firestore';

const { firestore } = getFirebase();
const expensesCol = collection(firestore, 'expenses');
let expensesQuery = null;

let expesnesGroup = collectionGroup(firestore, 'child');
// // 1. Get the first 100 expenses across all users that are under $100
// expensesQuery = query(
//   expesnesGroup,
//   limit(100),
//   where('cost', '<', 100),
// );

// // 2. Get the first 100 expenses across all users from any date range
expensesQuery = query(
  expesnesGroup,
  limit(100),
);


const state = bindToTable(expensesQuery)

function bindToTable(expensesQuery) {
  const state = reactive({ results: [] });
  let subscription = null;
  onMounted(() => {
    subscription = bindToState(state, expensesQuery);
  });
  onBeforeUnmount(() => {
    subscription();
  });
  return state;
}

function bindToState(state, query, transform) {
  return onSnapshot(query, snapshot => {
    const callbackFn = transform == null ? formatExpense : transform;
    state.results = snapshot.docs.map(d => {
      return callbackFn(snapshot, d);
    });
  });
}

function formatExpense(snapshot, d) {
  const { uid, date: rawDate, example } = d.data();
  const categories = ["t"]
  const dateConfig = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const date = new Intl.DateTimeFormat('en', dateConfig).format(Date.now());
  const { fromCache } = snapshot.metadata;
  const cost = example
  return { uid, cost, categories: categories.join(', ') , fromCache, date };
}
</script>


<template>
  <main>    
    <ExpenseExcersize 
      number="2"
      subtitle="The basics of querying"
      :results="state.results" />
  </main>

</template>

<style>

</style>
