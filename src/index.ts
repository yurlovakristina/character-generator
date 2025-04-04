type Role = "Warrior" | "Mage" | "Hacker";

type BaseCharacter = {
  name: string;
  level: number;
};

type Warrior = BaseCharacter & {
  role: "Warrior";
  weapon: string;
};

type Mage = BaseCharacter & {
  role: "Mage";
  spell: string;
};

type Hacker = BaseCharacter & {
  role: "Hacker";
  gadget: string;
};

type Character = Warrior | Mage | Hacker;
