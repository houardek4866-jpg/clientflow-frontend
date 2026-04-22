<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center">
    <div class="w-full max-w-md">
      <Card title="ClientFlow Login">
        <form @submit.prevent="handleLogin" class="space-y-4">
          <Input
            id="username"
            v-model="form.username"
            type="text"
            label="Username"
            placeholder="Enter your username"
            :error="errors.username"
            required
          />

          <Input
            id="password"
            v-model="form.password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            :error="errors.password"
            required
          />

          <div v-if="authStore.error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {{ authStore.error }}
          </div>

          <Button
            type="submit"
            variant="primary"
            full-width
            :loading="authStore.isLoading"
          >
            Login
          </Button>

          <p class="text-center text-gray-600 text-sm">
            Don't have an account?
            <RouterLink to="/register" class="text-primary-600 hover:underline">
              Register here
            </RouterLink>
          </p>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Button from '@/components/common/Button.vue'
import Input from '@/components/common/Input.vue'
import Card from '@/components/common/Card.vue'

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  username: '',
  password: '',
})

const errors = reactive({
  username: '',
  password: '',
})

const validate = () => {
  errors.username = form.username ? '' : 'Username is required'
  errors.password = form.password ? '' : 'Password is required'
  return !errors.username && !errors.password
}

const handleLogin = async () => {
  if (!validate()) return

  try {
    await authStore.login(form.username, form.password)
    router.push('/dashboard')
  } catch (err) {
    console.error('Login failed:', err)
  }
}
</script>
