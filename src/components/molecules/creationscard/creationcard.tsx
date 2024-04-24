import prisma from "@/lib/prisma";
import styles from './creationcard.module.scss';
import { DeleteButton } from "../creationform/creationform";
import Image from "next/image";

export default async function CreationCard() {
    const posts = await prisma.creations.findMany();

    return (
        <div className={styles.CreationsWraper}>
            {posts.map((creations) => (
                <div
                    key={creations.id}
                    className={styles.CreationPreviewContainer}
                >
                    <div className={styles.Preview}>
                        <Image className={styles.BannerPreview} src={creations.banner} alt="Preview Banner" height={60} draggable="false" width={60} />

                        <div className={styles.PreviewDetails}>
                            <h2 className={styles.Caption}>{creations.caption}</h2>
                            <div className={styles.Overflow}></div>
                        </div>
                    </div>

                    <DeleteButton id={creations.id} />
                </div>
            ))}
        </div>
    );
}

export function CreationsPlaceholder() {
    return (
        <div className="grid gap-4 w-full max-w-lg">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white shadow-md rounded-md p-4 w-full">
                    <div className="animate-pulse h-5 bg-gray-300 rounded w-3/4 mb-2" />
                    <div className="animate-pulse h-4 bg-gray-300 rounded w-1/2 mb-2" />
                </div>
            ))}
        </div>
    );
}
