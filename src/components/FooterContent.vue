<script setup lang="ts"></script>

<template>
  <footer class="px-4 pb-8 pt-6 bg-x-black md:px-14 md:pb-14 md:pt-10">
    <div class="w-full h-auto flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-10">
      <img src="@/assets/images/logo/finsweet.png" alt="Finsweet" class="mb-4 md:mb-0 w-32 md:w-auto" />
      <ul class="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
        <li><a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a></li>
        <li><a href="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a></li>
        <li><a href="/aboutus" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a></li>
        <li><a href="/contactus" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a></li>
        <li><a href="/privacypolicy" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Privacy Policy</a></li>
      </ul>
    </div>
    
    <div class="w-full h-[256px] bg-white bg-opacity-5 p-10 flex justify-center items-center gap-4 mb-10">
      <p class="text-white text-lg leading-[50px] md:text-4xl font-bold text-center md:w-[562px] mb-4 md:mb-0">Subscribe to our newsletter to get latest updates and news</p>
      <form action="#" class="flex flex-col md:flex-row items-center justify-center gap-4">
        <input type="email" class="w-full md:w-[323px] bg-transparent border border-x-darkgrey p-3 md:p-4 text-white" placeholder="Enter Your Email" required />
        <button type="submit" class="w-full md:w-[179px] flex items-center justify-center font-bold bg-x-blue py-3 md:py-4 text-white hover:bg-x-yellow transition duration-150 ease-in-out">Subscribe</button>
      </form>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-center md:text-left">
      <span class="text-white text-opacity-70">Finstreet 118 2561 Fintown</span>
      <ul class="flex gap-4">
        <li><a href="#"><img src="@/assets/images/logo/facebook.png" alt="Facebook" class="hover:opacity-75 transition duration-150 ease-in-out w-6 h-6 md:w-auto md:h-auto" /></a></li>
        <li><a href="#"><img src="@/assets/images/logo/twitter.png" alt="Twitter" class="hover:opacity-75 transition duration-150 ease-in-out w-6 h-6 md:w-auto md:h-auto" /></a></li>
        <li><a href="#"><img src="@/assets/images/logo/instagram.png" alt="Instagram" class="hover:opacity-75 transition duration-150 ease-in-out w-6 h-6 md:w-auto md:h-auto" /></a></li>
        <li><a href="#"><img src="@/assets/images/logo/linkedin.png" alt="LinkedIn" class="hover:opacity-75 transition duration-150 ease-in-out w-6 h-6 md:w-auto md:h-auto" /></a></li>
      </ul>
    </div>
    <div class="text-white text-opacity-70 text-center md:text-left mt-4 md:mt-0">Hello@finsweet.com 020 7993 2905</div>
  </footer>
</template>

