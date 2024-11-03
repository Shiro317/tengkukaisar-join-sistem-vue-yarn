<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import AuthorContent from '@/components/AuthorContent.vue'
import JoinContent from '@/components/JoinContent.vue'
</script>

<template>
  <MainLayout>
    <section class="mt-[300px] bg-white px-4 md:px-[80px] py-[40px]">
      <div class="flex flex-col gap-8 items-center md:items-start">
        <img
          src="@/assets/images/misc/manypeople2.png"
          alt="Many People 21"
          class="w-full max-md:px-5 max-md:pt-24"
        />

        <div
          class="w-full md:w-[600px] bg-white p-6 md:p-[60px] flex flex-col gap-4 md:absolute md:left-[180px] md:top-40"
        >
          <h5
            class="text-x-black text-center md:text-start font-semibold tracking-[3px] leading-[20px]"
          >
            ABOUT US
          </h5>
          <h1
            class="text-x-black text-3xl md:text-5xl font-bold leading-[40px] md:leading-[64px] tracking-[-1px] md:tracking-[-2px]"
          >
            We are a team of<br/>
            content writers who<br/>
            share their learnings
          </h1>
        </div>

        <div
          class="w-full md:w-[650px] bg-white p-6 md:p-[65px] flex flex-col gap-4 md:absolute md:right-[50px] md:top-[200px]"
        >
         <p class="text-x-mediumgrey leading-[28px] text-center md:text-start ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          class="w-full md:w-[690px] bg-x-blue p-6 md:p-[36px] flex flex-col md:flex-row justify-between items-center text-white font-bold text-2xl md:absolute md:left-[180px] md:top-[685px]"
        >
          <div class="text-center">
            <p class="text-5xl">12+</p>
            <p class="text-lg font-normal">Blogs Published</p>
          </div>
          <div class="text-center">
            <p class="text-5xl">18K+</p>
            <p class="text-lg font-normal">Views on Finsweet</p>
          </div>
          <div class="text-center">
            <p class="text-5xl">30K+</p>
            <p class="text-lg font-normal">Total active Users</p>
          </div>
        </div>

        <div
          class="w-full md:w-[855px] bg-x-yellow p-6 md:p-[10px] flex flex-col gap-4 md:absolute md:left-[180px] md:top-[840px]"
        ></div>
      </div>

      <div
        class="mission-vision bg-x-lavender py-32 px-16 max-md:px-5 max-md:pt-24"
      >
        <div class="container mx-auto max-w-[1053px]">
          <div class="flex gap-8 max-md:flex-col">
            <article class="w-6/12 max-md:w-full">
              <h2
                class="text-base font-semibold uppercase tracking-[3px] text-gray-800"
              >
                Our Mission
              </h2>
              <h3
                class="mt-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800"
              >
                Creating valuable content for creatives all around the world
              </h3>
              <p class="mt-4 leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </article>
            <article class="w-6/12 max-md:w-full">
              <h2
                class="text-base font-semibold uppercase tracking-[3px] text-gray-800"
              >
                Our Vision
              </h2>
              <h3
                class="mt-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800"
              >
                A platform that empowers individuals to improve
              </h3>
              <p class="mt-4 leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white px-4 md:px-[80px] py-[40px]">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <header
            class="flex flex-col mt-20 font-bold text-gray-800 max-md:mt-10 max-md:max-w-full"
          >
            <h2
              class="self-start text-4xl tracking-tighter leading-none text-gray-800"
            >
              Our team of creatives
            </h2>
            <p class="mt-4 text-2xl leading-8 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p
              class="mt-4 text-base text-x-mediumgrey leading-7 max-md:max-w-full font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </header>
        </div>
        <div class="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <img
            src="@/assets/images/misc/hands.png"
            alt="Hands"
            class="w-full md:w-auto"
          />
        </div>
      </div>
    </section>

    <section class="bg-white px-4 md:px-[80px] py-[40px]">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="@/assets/images/misc/peoplesitting.png"
            alt="People Sitting"
            class="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <article
            class="flex z-10 flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <h2
              class="self-start text-4xl tracking-tighter leading-none text-gray-800"
            >
              Why we started this Blog
            </h2>
            <p class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p
              class="mt-4 text-base text-x-mediumgrey leading-7 max-md:max-w-full font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </article>
        </div>
      </div>
    </section>

    <h2
      class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]"
    >
      <router-link to="/author"> List of Authors</router-link>
    </h2>

    <AuthorContent />

    <section class="flex flex-col gap-8 bg-white px-[80px] py-[40px]">
      <div class="flex items-center justify-between gap-6">
        <div
          class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
        >
          <img
            src="@/assets/images/misc/listauthor5.png"
            alt="List Author 5"
            class="w-[128px] h-[128px]"
          />
          <div class="flex flex-col items-center">
            <h3
              class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
            >
              Guy Hawkins
            </h3>
            <p
              class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
            >
              Content Writer @Company
            </p>
          </div>
          <ul class="flex items-center gap-6">
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/facebook.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/twitter.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/instagram.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/linkedin.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
          </ul>
        </div>
        <div
          class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6"
        >
          <img
            src="@/assets/images/misc/listauthor6.png"
            alt="List Author 6"
            class="w-[128px] h-[128px]"
          />
          <div class="flex flex-col items-center">
            <h3
              class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
            >
              Eleanor Pena
            </h3>
            <p
              class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
            >
              Content Writer @Company
            </p>
          </div>
          <ul class="flex items-center gap-6">
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/facebook.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/twitter.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/instagram.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/linkedin.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
          </ul>
        </div>
        <div
          class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
        >
          <img
            src="@/assets/images/misc/listauthor7.png"
            alt="List Author 7"
            class="w-[128px] h-[128px]"
          />
          <div class="flex flex-col items-center">
            <h3
              class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
            >
              Robert Fox
            </h3>
            <p
              class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
            >
              Content Writer @Company
            </p>
          </div>
          <ul class="flex items-center gap-6">
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/facebook.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/twitter.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/instagram.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/linkedin.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
          </ul>
        </div>
        <div
          class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
        >
          <img
            src="@/assets/images/misc/listauthor8.png"
            alt="List Author 8"
            class="w-[128px] h-[128px]"
          />
          <div class="flex flex-col items-center">
            <h3
              class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
            >
              Jacob Jones
            </h3>
            <p class="text-x-mediumgrey leading-[28px]">
              Content Writer @Company
            </p>
          </div>
          <ul class="flex items-center gap-6">
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/facebook.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/twitter.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/instagram.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img
                  src="@/assets/images/logo/linkedin.png"
                  alt=""
                  class="hover:opacity-75 transition duration-150 ease-in-out"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <JoinContent />
  </MainLayout>
</template>
