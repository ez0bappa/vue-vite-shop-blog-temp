<template>
    <div class="skeleton-home">
        <h4>Skeleton </h4>
        <suspense>
            <template #default>
                <ProfileCard></ProfileCard>
            </template>
            <template #fallback>
                <ProfileCardSkeleton />
            </template>
        </suspense>
    </div>
</template>

<script>
import ProfileCard from './ProfileCard.vue'
import ProfileCardSkeleton from './ProfileCardSkeleton.vue'

export default {
    name: 'SkeletonHome',
    components: {
        ProfileCard,
        ProfileCardSkeleton
    }
}
</script>

<style scoped>

</style>