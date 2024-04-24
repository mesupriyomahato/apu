import { ActionsForm } from "@/components/molecules/creationform/creationform";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { adminUsers } from "@/data/admins";
import styles from './admin.module.scss';
import AuthUserBadge from "@/components/atoms/authuser/authuser";
import CreationCard from "@/components/molecules/creationscard/creationcard";

export const metadata = {
  title: "Admin",
  description: "Admin Area",
};

export default async function Dashboard() {

  const { getUser } = getKindeServerSession();

  const user = await getUser();

  const isAdmin = user?.email && adminUsers.adminEmails.includes(user.email);

  return (
    <>
      <div className={styles.Wraper}>
        <div className={styles.Container}>

          <AuthUserBadge />


          {isAdmin &&
            <div className={styles.AdmminContainer}>

              <div className={styles.AddCreationContainerForm}>
                <div className={styles.ContainerHeading}>
                  <h1 className={styles.Heading}>Add Creation</h1>
                  <p className={styles.Description}>Add details to create a new Post</p>
                </div>

                <ActionsForm />
              </div>
              <div className={styles.CreationsContainer}>
                <CreationCard />
              </div>
            </div>


          }


        </div>


      </div>
    </>
  );
}
