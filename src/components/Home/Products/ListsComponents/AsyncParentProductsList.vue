<template>
    <div>
        <div class="default-suspense">
            <Suspense>
                <template #default>
                    <Users />
                </template>
                <template #fallback>
                    <div>Loading...</div>
                </template>
            </Suspense>
        </div>

        <div class="SuspenseFallbackBoundry">
            <div v-if="error">Parent: {{ error }}</div>
            <Suspense>
                <template #default>
                    <SuspenseFallbackBoundry />
                </template>
                <template #fallback>
                    <div>Loading...</div>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script>
import Users from './Users.vue'
import SuspenseFallbackBoundry from './SuspenseFallbackBoundry.vue'

import { ref, onErrorCaptured } from 'vue'

export default {
    name: 'AsyncParentProductsList',
    setup() {
        const error = ref(null)

        onErrorCaptured((e) => {
            error.value = e

            return true
        })

        return { error }
    },
    components: {
        Users,
        SuspenseFallbackBoundry
    }
}
</script>

<style lang="scss" scoped>

</style>