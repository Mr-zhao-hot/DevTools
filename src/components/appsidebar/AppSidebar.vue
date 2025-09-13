<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings, Users, Shield, FileText, ChevronDown } from 'lucide-vue-next'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

// 普通菜单项数据
const items = [
  { title: 'IP控制', url: '/ip', icon: Home },
  { title: 'Inbox', url: '#', icon: Inbox },
  { title: 'Calendar', url: '#', icon: Calendar },
  { title: 'Search', url: '#', icon: Search },
  { title: 'Settings', url: '#', icon: Settings },
]

// 折叠菜单的子项数据
const systemSubItems = [
  { title: 'B站视频', url: '/video/bili', icon: Users },
  { title: '抖音视频', url: '#/system/roles', icon: Shield },
  { title: '小红书', url: '#/system/logs', icon: FileText },
]
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>用户工具</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <!-- 原有普通菜单 -->
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url" class="flex items-center gap-2">
                  <component :is="item.icon" class="h-4 w-4" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <Collapsible defaultOpen class="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton class="flex items-center gap-2">
                    <Shield class="h-4 w-4" />
                    <span>视频爬取</span>
                    <ChevronDown
                      class="ml-auto h-4 w-4 transition-transform duration-200 ease-in-out
                 group-open/collapsible:rotate-180"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem
                      style="margin-top: 10px"
                      v-for="subItem in systemSubItems"
                      :key="subItem.title"
                    >
                      <router-link :to="subItem.url" class="flex items-center gap-2">
                        <component :is="subItem.icon" class="h-4 w-4" />
                        <span>{{ subItem.title }}</span>
                      </router-link>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>



            <!-- 完善的折叠菜单 -->
<!--            <Collapsible defaultOpen class="group/collapsible">-->
<!--              <SidebarMenuItem>-->
<!--                <CollapsibleTrigger asChild>-->
<!--                  <SidebarMenuButton class="flex items-center gap-2">-->
<!--                    <Shield class="h-4 w-4" />-->
<!--                    <span>System</span>-->
<!--                    <ChevronDown-->
<!--                      class="ml-auto h-4 w-4 transition-transform group-open/collapsible:rotate-180"-->
<!--                    />-->
<!--                  </SidebarMenuButton>-->
<!--                </CollapsibleTrigger>-->
<!--                <CollapsibleContent>-->
<!--                  <SidebarMenuSub>-->
<!--                    <SidebarMenuSubItem-->
<!--                      v-for="subItem in systemSubItems"-->
<!--                      :key="subItem.title"-->
<!--                    >-->
<!--                      <a :href="subItem.url" class="flex items-center gap-2">-->
<!--                        <component :is="subItem.icon" class="h-4 w-4" />-->
<!--                        <span>{{ subItem.title }}</span>-->
<!--                      </a>-->
<!--                    </SidebarMenuSubItem>-->
<!--                  </SidebarMenuSub>-->
<!--                </CollapsibleContent>-->
<!--              </SidebarMenuItem>-->
<!--            </Collapsible>-->

          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
