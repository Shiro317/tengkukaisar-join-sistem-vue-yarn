<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
const lastUpdateDate = '30 January 2022'
</script>

<template>
  <MainLayout>
    <!-- Header Section -->
    <section
      class="flex flex-col justify-center items-center p-20 w-full text-center text-gray-800 bg-x-lavender max-md:px-5 max-md:max-w-full"
    >
      <div class="flex flex-col max-w-full w-[300px]">
        <h1 class="text-5xl font-bold tracking-tighter leading-none max-md:text-4xl mb-5">
          Privacy Policy
        </h1>
        <p class="text-sm text-gray-500">Last Updated: {{ lastUpdateDate }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-3xl mx-auto px-8 py-12">
      <main class="space-y-14 mt-20 mb-20">
        <!-- First Section -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Lorem ipsum dolor sit amet
          </h2>
          <p class="text-gray-600 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
          </p>
        </section>

        <!-- Second Section -->
        <section>
          <h2 class="text-3xl font-semibold text-gray-900 gap-4 mb-4 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </h2>
          <div class="space-y-6">
            <p class="text-gray-600 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
            </p>
            <p class="text-gray-600 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
            </p>
          </div>
        </section>
      </main>
    </div>
  </MainLayout>
</template>