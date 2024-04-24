import React from 'react';
import styles from './authuser.module.scss'
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { adminUsers } from "@/data/admins";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



export default async function AuthUserBadge() {

    const { getUser, isAuthenticated } = getKindeServerSession();

    const user = await getUser();

    const isAdmin = user?.email && adminUsers.adminEmails.includes(user.email);

    return (
        <div className={styles.UserBadge}>
            {!(await isAuthenticated()) ? (
                <div className={styles.LoginButton}>
                    <LoginLink style={{height: '100%', width: '100%'}}>
                        Sign in
                    </LoginLink>
                </div>
            ) : (
                <div className={styles.Avatar}>
                    {user?.picture ? (
                        <img
                            className={styles.AvatarPic}
                            src={user?.picture}
                            alt="user profile avatar"
                            referrerPolicy="no-referrer"
                            draggable="false"
                        />
                    ) : (
                        <div className="avatar">
                            {user?.given_name?.[0]}
                            {user?.family_name?.[0]}
                        </div>
                    )}
                    <div className={styles.LogoutButton}>
                        {/* <LogoutLink style={{height: '100%', width: '100%'}}>Log out</LogoutLink> */}
                    </div>
                </div>
            )}

        </div>
    )
}