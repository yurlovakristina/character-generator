// Function to return the attack based on role
export function getAttack(role: string): string {
    switch (role) {
      case "Warrior":
        return "Sword";
      case "Mage":
        return "Fireball";
      case "Hacker":
        return "Hack";
      default:
        return "Unknown attack";
    }
  }
  
  // Function to reverse text or number
  export function reverse(value: string | number): string | number {
    if (typeof value === "string") {
      return value.split("").reverse().join("");
    } else {
      return -value;
    }
  }
  