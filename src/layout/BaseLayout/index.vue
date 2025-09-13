<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/components/appsidebar/AppSidebar.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main style="border: 1px red solid; display: flex; flex-direction: column; width: 100%">
      <!--   header    -->
      <div style="border: 1px red solid; line-height: 3.4rem" class="h-14">
        <SidebarTrigger />
        <div style="float: right;" class="mr-4">
          <Button class="mr-2"> 检查更新 </Button>
          <Button class="mr-2"> 切换主题 </Button>
          <Button class="mr-2"> 设置 </Button>
        </div>
      </div>
      <!--   main   -->
      <div>
        <RouterView/>
      </div>
    </main>
  </SidebarProvider>
</template>
