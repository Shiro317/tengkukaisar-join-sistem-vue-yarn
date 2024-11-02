<script setup lang="ts">
import AuthorContent from '@/components/AuthorContent.vue'
import CategoryContent from '@/components/CategoryContent.vue'
import JoinContent from '@/components/JoinContent.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden">
      <!-- Hero -->
      <section
        class="h-[680px] bg-[url('@/assets/images/misc/cover.png')] bg-cover"
      >
        <div
          class="w-full h-full flex flex-col gap-5 px-[80px] pt-[128px] bg-x-black bg-opacity-40"
        >
          <h5 class="text-white text-start font-semibold tracking-[3px]">
            POSTED ON <span class="font-black">STARTUP</span>
          </h5>
          <h1
            class="w-[80%] text-white text-[56px] font-bold tracking-[-2px] leading-[64px]"
          >
            Step-by-step guide to choosing great font pairs
          </h1>
          <p class="text-white leading-[28px]">
            By <span class="text-x-blue">James West</span> &nbsp;|&nbsp; May 23,
            2022
          </p>
          <p class="w-[52%] text-white leading-[28px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <a
            href="blog/post"
            class="w-[204px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out"
          >
            Read More >
          </a>
        </div>
      </section>

      <!-- Featured Post -->
      <section
        class="bg-white px-[80px] pt-[128px] pb-[40px] flex justify-between gap-8"
      >
        <div class="h-[804px] flex flex-col gap-4">
          <h2
            class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]"
          >
            Featured Post
          </h2>
          <div class="w-full flex-grow border p-8">
            <img
              class="w-full object-cover mb-8"
              src="@/assets/images/misc/whitehouse.png"
              alt="White Building"
            />
            <div class="w-full flex flex-col gap-4">
              <label class="text-x-black text-sm font-medium leading-[20px]"
                >By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp;
                May 23, 2022</label
              >
              <h3
                class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p class="text-x-mediumgrey w-[551px] leading-[28px] mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <a
                href="#"
                class="w-[204px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out"
              >
                Read More >
              </a>
            </div>
          </div>
        </div>
        <div class="h-[804px] flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2
              class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]"
            >
              All Post
            </h2>
            <a href="#" class="text-x-yellow leading-[28px]">View All</a>
          </div>
          <div>
            <div
              class="w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <label class="text-x-black text-sm font-medium leading-[20px]"
                >By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp;
                Aug 23, 2021</label
              >
              <h4
                class="text-x-black text-2xl font-bold leading-[32px] w-[369px]"
              >
                8 Figma design systems that you can download for free today.
              </h4>
            </div>
            <div
              class="bg-x-lightyellow w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2"
            >
              <label class="text-x-black text-sm font-medium leading-[20px]"
                >By <span class="text-x-yellow">John Doe</span> &nbsp;&nbsp; Aug
                23, 2021</label
              >
              <h4
                class="text-x-black text-2xl font-bold leading-[32px] w-[369px]"
              >
                8 Figma design systems that you can download for free today.
              </h4>
            </div>
            <div
              class="w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <label class="text-x-black text-sm font-medium leading-[20px]"
                >By <span class="text-x-yellow">John Doe</span> &nbsp;&nbsp; Aug
                23, 2021</label
              >
              <h4
                class="text-x-black text-2xl font-bold leading-[32px] w-[369px]"
              >
                8 Figma design systems that you can download for free today.
              </h4>
            </div>
            <div
              class="w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <label class="text-x-black text-sm font-medium leading-[20px]"
                >By <span class="text-x-yellow">John Doe</span> &nbsp;&nbsp; Aug
                23, 2021</label
              >
              <h4
                class="text-x-black text-2xl font-bold leading-[32px] w-[369px]"
              >
                8 Figma design systems that you can download for free today.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <!-- About us & Our mission -->
      <section class="bg-white px-[80px] py-[40px]">
        <div class="w-full flex items-center">
          <span class="bg-white w-[15%] h-[23px]"></span>
          <span class="bg-x-yellow w-[60%] h-[23px]"></span>
          <span class="bg-x-blue w-[25%] h-[23px]"></span>
        </div>
        <div class="bg-x-lavender p-[80px] flex justify-between gap-[80px]">
          <div class="w-[50%] flex flex-col gap-4">
            <h5
              class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]"
            >
              ABOUT US
            </h5>
            <h2
              class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
            >
              We are a community of content writers who share their learnings
            </h2>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              class="text-x-yellow text-[18px] font-bold leading-[32px] hover:text-x-black transition duration-200 ease-in-out"
              >Read More ></a
            >
          </div>
          <div class="w-[50%] flex flex-col gap-4">
            <h5
              class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]"
            >
              OUR MISSION
            </h5>
            <h3
              class="text-x-black text-3xl font-bold tracking-[-1px] leading-[40px]"
            >
              Creating valuable content for creatives all around the world
            </h3>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      <!-- Category -->
      <h2
        class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]"
      >
        Choose A Category
      </h2>
      <CategoryContent />

      <!-- Special Post -->
      <section class="bg-white px-[80px] py-[40px]">
        <div class="flex items-center relative">
          <img src="@/assets/images/misc/manypeople1.png" alt="Many People 1"/>
          <div
            class="w-[706px] bg-white p-[80px] flex flex-col gap-4 absolute right-0 bottom-0"
          >
            <h5
              class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]"
            >
              WHY WE STARTED
            </h5>
            <h1
              class="text-x-black text-5xl font-bold leading-[64px] tracking-[-2px]"
            >
              It started out as a simple idea and evolved into our passion
            </h1>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <a
              href="#"
              class="w-[269px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out"
            >
              Discover our story >
            </a>
          </div>
        </div>
      </section>

      <!-- List Author -->
      <h2
        class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]"
      >
        <a href="/author"> List of Authors </a>
      </h2>
      <AuthorContent />

      <!-- Logo Component -->
      <section class="bg-white px-[94px] py-[40px]">
        <div class="flex items-center justify-between gap-8">
          <div class="flex flex-col justify-center">
            <p class="text-x-mediumgrey text-opacity-60 text-sm leading-[20px]">
              We are
            </p>
            <h4 class="text-x-mediumgrey text-xl font-bold leading-[32px]">
              Featured in
            </h4>
          </div>
          <img src="@/assets/images/logo/logoipsum1.png" alt="Logoipsum 1" />
          <img src="@/assets/images/logo/logoipsum2.png" alt="Logoipsum 2" />
          <img src="@/assets/images/logo/logoipsum3.png" alt="Logoipsum 3" />
          <img src="@/assets/images/logo/logoipsum4.png" alt="Logoipsum 4" />
          <img src="@/assets/images/logo/logoipsum5.png" alt="Logoipsum 5" />
        </div>
      </section>

      <!-- Testimoni -->
      <section class="bg-white px-[80px] py-[40px]">
        <div class="bg-x-lightyellow flex justify-between gap-[40px] p-[112px]">
          <div class="w-[40%] flex flex-col gap-4">
            <h5
              class="text-x-black font-semibold leading-[20px] tracking-[3px]"
            >
              TESTIMONIALS
            </h5>
            <h2
              class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
            >
              What people say about our blog
            </h2>
            <p class="text-x-black leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div
            class="w-[60%] flex flex-col justify-between gap-[112px] ps-[80px] border-s border-x-mediumgrey border-opacity-40"
          >
            <h4 class="text-x-black text-xl font-bold leading-[32px] pe-[56px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div class="flex justify-between items-center">
              <div class="flex items-center justify-center gap-4">
                <img
                  src="@/assets/images/misc/profilepicture.png"
                  alt="Profile Picture"
                />
                <div>
                  <h4 class="text-x-black text-xl font-bold leading-[32px]">
                    Jonathan Vallem
                  </h4>
                  <p class="text-x-mediumgrey leading-[28px]">New york, USA</p>
                </div>
              </div>
              <div class="flex gap-6">
                <img
                  src="@/assets/images/logo/backbutton.png"
                  alt=""
                  class="object-contain shrink-0 my-auto w-12 aspect-square"
                />
                <img
                  src="@/assets/images/logo/nextbutton.png"
                  alt=""
                  class="object-contain shrink-0 aspect-square w-[62px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <JoinContent/>
    </main>
  </MainLayout>
</template>
