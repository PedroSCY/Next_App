/* eslint-disable @typescript-eslint/no-explicit-any */

function erroEm5s(): Promise<undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, 5000);
  });
}

export default async function Page() {
  const obj: any = await erroEm5s();
  return <span>{obj.name}</span>;
}
