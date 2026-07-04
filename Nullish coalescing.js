// Nullish coalescing operator '??' :
// The nullish coalescing operator returns the right-hand value only if the left-hand value is null or undefined.
// syntax:value1 ?? value2
// "If value1 is null or undefined, use value2. Otherwise, use value1."
// ex:
let name = null; // null is nullish
console.log( name ?? "guest");  // null is considerrd nullish and use guest.
// ex:
let name1 = "Zenia";
console.log(name1 ?? "guest"); // since Zenia is not null or undifined it use Zenia.

let firstName = null;
let lastName = null;
let nickName = "Disha";
console.log(firstName ?? lastName ?? nickName);

// Comparison with || :
// the (OR)|| operator can be used as ??. but they behave diffrently.
// ex:
let value = 0;
console.log(value || 100);  // the output will be 0 because || sees 0 as false,so it return 100.
console.log(value ?? 100); // the out put will 0 beacuse 0 is a valid value and its not null or undifinied, so return 0.
// ex of null and undifined:
let value1 = null;
console.log(value1 || "default");
console.log(value1 ?? "default");
// both operator return default because null means "no value".
let value2 = undefined;
console.log(value2 || "Default");
console.log(value2 ?? "Default");
// again it return default because the value is undefined.

// 