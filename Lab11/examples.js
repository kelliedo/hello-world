age = 20;
name = "Kellie";
attributes  =  name + ";" + age + ";" + (age +0.5) + ";" + (0.5 - age);

parts = attributes.split(";");
for(i in parts) {
    parts[i] = `${typeof parts[i]} ${parts[i]}`;
}
console.log(parts.join(","));
