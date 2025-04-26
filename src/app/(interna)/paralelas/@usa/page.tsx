
function erroEm5s(): Promise<undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, 5000);
  });
}

export default async function Page() {
  const obj = await erroEm5s();
  return <span>{(obj as unknown as { name: string}).name}</span>;
}
