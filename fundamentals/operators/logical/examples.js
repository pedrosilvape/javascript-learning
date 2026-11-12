// 1. Operadores Lógicos
const age = 18;
const isAdult = age >= 18;
const hasDriverLicense = false;

// AND (&&): ambas as condições precisam ser verdadeiras.
const canDrive = isAdult && hasDriverLicense;
console.log("Pode dirigir?", canDrive);

// OR (||): pelo menos uma condição precisa ser verdadeira.
const hasAuthorization = true;
const canAccess = isAdult || hasAuthorization;
console.log("Pode acessar?", canAccess);

// NOT (!): inverte o valor lógico.
const needsGuardian = !isAdult;
console.log("Precisa de acompanhante?", needsGuardian);

// 2. Exemplos Práticos

// 2.1. Verificação de login.
const hasLogin = true;
const hasPassword = false;
const loginChecker = hasLogin && hasPassword;
console.log("Possui login e senha?", loginChecker);

// 2.2. Inversão de valor lógico.
const isAvailable = false;
console.log("Disponibilidade invertida:", !isAvailable);

// 2.3. Condições compostas.
const num1 = 2;
const num2 = 2;
const numberChecker = num1 % 2 === 0 && num2 % 2 === 0 && num1 === num2;
console.log("Os números são pares e iguais?", numberChecker);
