
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: "About the Ministry",
    href: "/about",
    submenu: [
      { title: "Vision, Mission & Values", href: "/about/vision" },
      { title: "The Minister", href: "/about/minister" },
      { title: "National Committees", href: "/about/committees" },
      { title: "Departments", href: "/about/departments" },
      { title: "Branches", href: "/about/branches" },
      { title: "Anti-money Laundering & Terrorism Financing", href: "/about/aml" },
    ]
  },
  {
    title: "Consumers",
    href: "/consumers",
    submenu: [
      { title: "E-Services", href: "/consumers/e-services" },
      { title: "Services & Transaction Forms", href: "/consumers/services" },
      { title: "Awareness", href: "/consumers/awareness" },
    ]
  },
  {
    title: "Investors",
    href: "/investors",
    submenu: [
      { title: "E-Services", href: "/investors/e-services" },
      { title: "Services & Transaction Forms", href: "/investors/services" },
      { title: "Qatar Investment Portal", href: "/investors/portal" },
      { title: "Awareness", href: "/investors/awareness" },
    ]
  },
  {
    title: "Organisations",
    href: "/organisations",
    submenu: [
      { title: "E-Services", href: "/organisations/e-services" },
      { title: "Services & Transaction Forms", href: "/organisations/services" },
      { title: "Qatar Industry Portal", href: "/organisations/industry-portal" },
      { title: "Qatar Business Map", href: "/organisations/business-map" },
      { title: "Awareness", href: "/organisations/awareness" },
    ]
  },
  {
    title: "Industry",
    href: "/industry",
    submenu: [
      { title: "E-Services", href: "/industry/e-services" },
      { title: "Services & Transaction Forms", href: "/industry/services" },
    ]
  },
  {
    title: "Media Centre",
    href: "/media-centre",
    submenu: [
      { title: "News", href: "/media-centre/news" },
    ]
  },
  {
    title: "Resources",
    href: "/resources",
    submenu: [
      { title: "Statistics & Reports", href: "/resources/statistics" },
      { title: "Initiatives", href: "/resources/initiatives" },
      { title: "Useful websites", href: "/resources/websites" },
    ]
  },
];

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger className="text-base font-medium">
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-4">
                {item.submenu.map((subItem) => (
                  <li key={subItem.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={subItem.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          {subItem.title}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;
