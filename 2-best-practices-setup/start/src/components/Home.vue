<script setup>
import { signInAnonymously, getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router'
import { init } from '../firebase';

const { auth } = init()

const router = useRouter();

async function signIn() {
  // Note: This is a not a best practice
  const result = await signInAnonymously(auth);
  console.log(result.user);
  router.push(`/dashboard`);
}

</script>

<template>
  <h1>I am the home page</h1>
  <h5>You should sign in here</h5>
  <button @click="signIn">Sign In</button>
</template>
