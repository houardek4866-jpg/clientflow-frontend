<template>
<span
:class="[
'inline-block px-3 py-1 rounded-full text-xs font-semibold',
variantClasses,
]"
> >
> <slot/>
</span>
</template>
<script setup lang="ts">
const props = withDefaults(
defineProps<{
variant?:
| 'primary'
| 'success'
| 'warning'
| 'danger'
| 'info'
}>(),
{ variant: 'primary' }
)
const variantClasses = {
primary: 'bg-blue-100 text-blue-800',
success: 'bg-green-100 text-green-800',
warning: 'bg-yellow-100 text-yellow-800',
danger: 'bg-red-100 text-red-800',
info: 'bg-gray-100 text-gray-800',
}[props.variant]
</script>
