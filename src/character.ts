import { Character, Warrior, Mage, Hacker } from "./types";

export function createWarrior(name: string, weapon: string): Warrior {
  return { name, level: 1, role: "Warrior", weapon };
}

export function createMage(name: string, spell: string): Mage {
  return { name, level: 1, role: "Mage", spell };
}

export function createHacker(name: string, gadget: string): Hacker {
  return { name, level: 1, role: "Hacker", gadget };
}

export function printCharacterInfo(char: Character): void {
  console.log(`\nName: ${char.name}, Level: ${char.level}, Role: ${char.role}`);
  
  if ("weapon" in char) console.log("Weapon:", char.weapon);
  if ("spell" in char) console.log("Spell:", char.spell);
  if ("gadget" in char) console.log("Gadget:", char.gadget);
}
