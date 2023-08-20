<script setup>
import { onMounted, reactive, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { initializeApp } from "firebase/app"
import { config } from "../config"
import { getFirestore, collection, onSnapshot, doc, setDoc } from "firebase/firestore"
import { getAuth, signInAnonymously } from "firebase/auth"

const firebaseApp = initializeApp(config.firebase);
const firestore = getFirestore(firebaseApp);
const markdownsCollection = collection(firestore, "markdowns")
const auth = getAuth(firebaseApp);

const state = reactive({ markdowns: [] });
const router = useRouter();

onBeforeMount(async () => {
  state.user = auth.currentUser;
  console.log(auth.currentUser)
})

onMounted(() => {
  onSnapshot(markdownsCollection, snapshot => {
    const markdowns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    state.markdowns = markdowns;
  })
})

function newMarkdown() {
  // reference - where it is?
  const newDoc = doc(markdownsCollection)
  // mutation func - let me update the server?
  setDoc(newDoc, { markdown: "", converted: "" })
  router.push(`/editor/${newDoc.id}`)
}
</script>

<template>
  <h1>I am the dashboard</h1>

  <ul v-for="markdown in state.markdowns" :key="markdown.id">
    <li>
      <router-link :to="{ path: `/editor/${markdown.id}` }">{{ markdown.id }}</router-link>
    </li>
  </ul>

  <button @click="newMarkdown">New</button>

</template>
