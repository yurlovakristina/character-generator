export type Role = "Warrior" | "Mage" | "Hacker";

export interface Character {
  name: string;
  level: number;
  role: Role;
}

export interface Warrior extends Character {
  role: "Warrior";
  weapon: string;
}

export interface Mage extends Character {
  role: "Mage";
  spell: string;
}

export interface Hacker extends Character {
  role: "Hacker";
  gadget: string;
}
