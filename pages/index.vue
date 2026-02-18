<template>
  <div :style="styles.container">
    <h1 :style="styles.label">Nuxt on Trapiche</h1>
    <div :style="styles.count">{{ count }}</div>
    <div :style="styles.buttons">
      <button :style="styles.dec" @click="change('decrement')">−</button>
      <button :style="styles.inc" @click="change('increment')">+</button>
    </div>
    <span :style="styles.badge">server-side counter</span>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/counter')
const count = ref(data.value?.count ?? 0)

async function change(action) {
  const result = await $fetch('/api/counter', {
    method: 'POST',
    body: { action },
  })
  count.value = result.count
}

const styles = {
  container: 'font-family:system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:#0f0f0f;color:#fff;gap:2rem;',
  label: 'font-size:1.25rem;opacity:0.5;letter-spacing:0.05em;text-transform:uppercase;',
  count: 'font-size:6rem;font-weight:700;line-height:1;',
  buttons: 'display:flex;gap:1rem;',
  dec: 'padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#333;color:#fff;',
  inc: 'padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#6366f1;color:#fff;',
  badge: 'font-size:0.75rem;opacity:0.35;',
}
</script>
