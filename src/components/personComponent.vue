<template>
    <div class="flex items-center w-full mx-auto px-5 py-10 space-x-5">
        <div class="connect" style="background-image: url('/images/person.png')"></div>
        
        <div class="flex flex-col px-5 py-3 w-5/6">
            <slot name="departament" class="my-3"></slot>
            <div class="flex flex-col my-3">
                <p class="text-justify mb-3">
                    <slot name="desc"></slot>
                </p>
                <div class="hidden md:flex justify-around text-justify">
                    <p class="w-5/12">
                        <slot name="desc1"></slot>
                    </p>
                    <p class="w-5/12">
                        <slot name="desc2"></slot>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'person',
    props: {
        img: {
            type: String,
            default: 'person.png'
        }
    }
}
</script>

<style scoped>
.connect {
    @apply flex mx-auto bg-cover relative w-[80px] h-[80px] rounded-full border-4 border-gray-700 z-10;
}
    .connect::after {
        @apply border-2 border-gray-700 absolute bottom-full w-0 z-0;
        content: ' ';
        left: calc(50% - 2px);
        height: 200%;
    }
    .connect::before {
        @apply border-2 border-gray-700 absolute top-full w-0 z-0;
        content: ' ';
        left: calc(50% - 2px);
        height: 200%;
    }
</style>
