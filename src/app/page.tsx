import Link from "next/link";
import Name from "@/components/atoms/name/name";
import styles from './Home.module.scss';
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import TriggerBanner from "@/components/atoms/triggerbanner/triggerbanner";
import prisma from "@/lib/prisma";


export const metadata = {
  title: "Supriyo Mahato",
  description: "Full stack enginneer from India",
};

export default async function Home() {

  const creations = await prisma.creations.findMany();

  return (
    <>

      <div className={styles.Universal}>
        <div className={styles.Wraper}>
          <NavBar />
          <div className={styles.Container}>
            <div className={styles.Hero}>

              <div className={styles.TopLayer}>
                <p className={styles.Label}>design Engineer</p>
                <p className={styles.Label}>from india (IN)</p>
              </div>

              <Name />

            </div>
            <TriggerBanner />
          </div>

          <div className={styles.CreationsGrid}>

            {creations.map((post) => (
              <div key={post.id} className={styles.Creation}>

                <div className={styles.CreationLink} draggable="false">
                  <img
                    draggable="false"
                    src={post.banner}
                    className={styles.Thumbnail}
                  />
                  <p className={styles.Caption}>{post.caption}</p>

                </div>

              </div>

            ))}
          </div>

        </div>
        <Footer />
      </div>

    </>
  );
}
