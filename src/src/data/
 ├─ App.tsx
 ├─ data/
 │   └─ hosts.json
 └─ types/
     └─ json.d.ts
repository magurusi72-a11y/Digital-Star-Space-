scr/data/hosts.json
[
  {
    "name": "Marko Magurusi",
    "bio": "Founder & educator based in Mwanza, Tanzania"
  },
  {
    "name": "Jane Doe",
    "bio": "Digital Skills Instructor"
  }
]

src/types/json.d.ts declare module "*.json" {
  const value: any;
  export default value;
}