import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorView from '@/views/AuthorView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import PolicyView from '@/views/PrivacyPolicyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/post',
      name: 'blog-post',
      component: BlogPostView,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PolicyView,
    },
  ],
})

export default router
