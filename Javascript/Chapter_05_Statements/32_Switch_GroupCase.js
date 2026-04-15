let browser = "Edge";

switch (browser) {
    // Grouping cases from Crome to Opera
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Cromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple Project!");
        break;
    default:
        console.log("Unknown Browser!");

}