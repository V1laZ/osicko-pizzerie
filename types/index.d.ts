declare global {
  interface DailyMenuItem {
    id: number;
    name: string;
    price: number;
  }

  interface MenuNavbarItem {
    id: number;
    name: string;
    description: string;
  }

  interface Menu {
    id: number;
    name: string;
    description: string;
    content: MenuItem[];
  }

  interface MenuItem {
    id: number;
    name: string;
    allergens?: string[];
    description: string;
    price: number;
  }
}

export default global;