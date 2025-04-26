export default async function Page() {
  const obj = await erroEm5s();

  if (process.env.NODE_ENV !== "development" && obj === undefined) {
    throw new Error('Objeto inválido!');
  }

  return (
    <span>{(obj as unknown as { name: string }).name}</span>
  );
}

function erroEm5s(): Promise<undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, 5000);
  });
}