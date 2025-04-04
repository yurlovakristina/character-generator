
import { getAttack, reverse } from "./utils";
import type { Role, Warrior, Mage, Hacker } from "./types";
const readline = require("readline-sync");


// Welcome message for the user
console.log("🎮 Welcome to the character creation!");

// Ask the user for the character's name
const name = readline.question("📝 Enter the character's name: ");

// Ask the user to choose a role for the character (Warrior, Mage, Hacker)
const roleInput = readline.question("🧩 Choose a role (Warrior / Mage / Hacker): ");
const role = roleInput as Role; // Cast the input to a specific role type

let character: Warrior | Mage | Hacker; // Declare a variable to hold the character based on the role

// Based on the selected role, prompt the user for role-specific input
switch (role) {
  case "Warrior":
    // If Warrior is chosen, ask for a weapon name
    const weapon = readline.question("⚔️ Enter the weapon name: ");
    character = {
      name,
      level: 1,
      role,
      weapon, // Add weapon property specific to Warrior
    } as Warrior; // Cast the object to Warrior type
    break;
  
  case "Mage":
    // If Mage is chosen, ask for a spell name
    const spell = readline.question("✨ Enter the spell name: ");
    character = {
      name,
      level: 1,
      role,
      spell, // Add spell property specific to Mage
    } as Mage; // Cast the object to Mage type
    break;
  
  case "Hacker":
    // If Hacker is chosen, ask for a gadget name
    const gadget = readline.question("💻 Enter the gadget name: ");
    character = {
      name,
      level: 1,
      role,
      gadget, // Add gadget property specific to Hacker
    } as Hacker; // Cast the object to Hacker type
    break;
  
  default:
    // If the role input is invalid, print an error message and exit the program
    console.log("❌ Unknown role. Please try again.");
    process.exit(1); // Terminate the program if role is unknown
}

// Display the character information after creation
console.log(`\n🧙 Character created:
Name: ${character.name}
Level: ${character.level}
Role: ${character.role}`);

// Check which properties the character has and display accordingly
if ("weapon" in character) {
  // If the character is a Warrior, display the weapon
  console.log(`Weapon: ${character.weapon}`);
} else if ("spell" in character) {
  // If the character is a Mage, display the spell
  console.log(`Spell: ${character.spell}`);
} else if ("gadget" in character) {
  // If the character is a Hacker, display the gadget
  console.log(`Gadget: ${character.gadget}`);
}

// Display the attack type based on the character's role
console.log(`\n⚔️ ${character.name} attacks with: ${getAttack(character.role)}`);

// Ask the user if they want to reverse a text or number
const text = readline.question("\n🔄 Do you want to reverse text or a number? Enter anything: ");

// Reverse the input depending on whether it's a string or a number
const reversed = isNaN(Number(text)) ? reverse(text) : reverse(Number(text));

// Display the reversed result
console.log(`👉 Reversed result: ${reversed}`);
