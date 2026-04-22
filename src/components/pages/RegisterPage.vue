<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center">
    <div class="w-full max-w-md">
      <Card title="Create Account">
        <form @submit.prevent="handleRegister" class="space-y-4">
          <Input
            id="username"
            v-model="form.username"
            type="text"
            label="Username"
            placeholder="Choose a username"
            :error="errors.username"
            required
          />

          <Input
            id="email"
            v-model="form.email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            :error="errors.email"
            required
          />

          <Input
            id="first_name"
            v-model="form.first_name"
            type="text"
            label="First Name"
            :error="errors.first_name"
          />

          <Input
            id="last_name"
            v-model="form.last_name"
            type="text"
            label="Last Name"
            :error="errors.last_name"
          />

          <Input
            id="password"
            v-model="form.password"
            type="password"
            label="Password"
            placeholder="Create a strong password"
            :error="errors.password"
            required
          />

          <Input
            id="password2"
            v-model="form.password2"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            :error="errors.password2"
            required
          />

          <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {{ error }}
          </div>

          <Button type="submit" variant="primary" full-width :loading="isLoading">
            Create Account
          </Button>

          <p class="text-center text-gray-600 text-sm">
            Already have an account?
            <RouterLink to="/login" class="text-primary-600 hover:underline">
              Login here
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
import authService from '@/services/auth'
import Button from '@/components/common/Button.vue'
import Input from '@/components/common/Input.vue'
import Card from '@/components/common/Card.vue'

const router = useRouter()
const isLoading = ref(false)
const error = ref('')

const form = reactive({
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  password2: '',
})

const errors = reactive({
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  password2: '',
})

const validate = () => {
  errors.username = form.username ? '' : 'Username is required'
  errors.email = form.email ? '' : 'Email is required'
  errors.password = form.password ? '' : 'Password is required'
  errors.password2 = form.password2 ? '' : 'Please confirm password'

  if (form.password !== form.password2) {
    errors.password2 = 'Passwords do not match'
  }

  return !Object.values(errors).some((e) => e)
}

const handleRegister = async () => {
  if (!validate()) return

  isLoading.value = true
  error.value = ''

  try {
    await authService.register(form)
    // Rediriger vers login après inscription réussie
    router.push('/login?message=Account created successfully')
  } catch (err: any) {
    error.value = err.response?.data?.detail || 'Registration failed'
  } finally {
    isLoading.value = false
  }
}
</script>
