export const ReceiveComponent = ({ url }: { url: string }) => {
  if (url) console.log('actualizado');
  return (
    <>
      <h1>ReceiveComponent</h1>
      <a href={url} target='_blanck'>
        Users
      </a>
    </>
  );
};
