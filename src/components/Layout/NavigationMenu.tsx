
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
import { scrollToTop } from '@/hooks/use-scroll-to-top';

const menuItems = [
  {
    title: "About the Ministry",
    href: "/about",
    submenu: [
      { title: "The Minister", href: "/about/minister" },
      { title: "The Strategy of the Ministry", href: "/about/strategy" },
      { title: "Vision, Mission & Values", href: "/about/vision" },
      { title: "National Committees", href: "/about/committees" },
    ]
  },
  {
    title: "Services Hub",
    href: "/services",
    submenu: [
      { title: "Business", href: "/services/business" },
      { title: "Consumer", href: "/services/consumer" },
    ]
  },
  {
    title: "E-Services",
    href: "/e-services"
  },
  {
    title: "Media Centre",
    href: "/media-centre/news",
    submenu: [
      { title: "News", href: "/media-centre/news" },
      { title: "Reports", href: "/media-centre/reports" },
      { title: "Gallery", href: "/media-centre/gallery" },
    ]
  },
  {
    title: "Resources",
    href: "/resources"
  },
  {
    title: "Contact Us",
    href: "/contact-us"
  },
];

const NavigationMenuDemo = () => {
  const handleMainNavClick = () => {
    // Add a small delay to ensure navigation starts before scrolling
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.submenu ? (
              <>
                <NavigationMenuTrigger className="text-xl font-medium bg-transparent hover:bg-white/10 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-white/10 text-white hover:text-white focus:text-white transition-colors duration-200 px-4 py-2 rounded-md">
                  <Link to={item.href} className="flex items-center" onClick={handleMainNavClick}>
                    {item.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-1">
                  <ul className="grid w-[350px] gap-1 p-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={subItem.href}
                            onClick={handleMainNavClick}
                            className={cn(
                              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-qatari/10 hover:text-qatari focus:bg-qatari/10 focus:text-qatari text-gray-700 border-l-4 border-transparent hover:border-qatari"
                            )}
                          >
                            <div className="text-base font-medium leading-tight">
                              {subItem.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  to={item.href}
                  onClick={handleMainNavClick}
                  className="text-xl font-medium bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-white focus:text-white px-4 py-2 rounded-md transition-colors"
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;
