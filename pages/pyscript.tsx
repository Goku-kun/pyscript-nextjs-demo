import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <link
          rel="stylesheet"
          href="https://pyscript.net/latest/pyscript.css"
        />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
    </Head>
      <py-script
      dangerouslySetInnerHTML={{
      __html: `
      for i in range(10):
        print(i)

      def function():
        print("hello world")
      
      # value = input("Enter a value:")
      # print(value)
      `,
      }}
      />
      <py-repl />
    </>
  );
}

{/*while True:*/}
    {/*value = input("Enter input:")*/}
    {/*print(value)*/}
    {/*if value == "123123":*/}
        {/*break*/}

{/*print("Exit")*/}


