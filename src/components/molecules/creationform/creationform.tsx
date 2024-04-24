"use client";

import { useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { createPost, deletePost } from "@/lib/actions";
import { useRef, useState } from "react";
import LoadingDots from "@/components/atoms/loader/dots/dots";
import InputBar from "../../atoms/inputbar/Input";
import styles from './creationform.module.scss';



export function ActionsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const [caption, setCaption] = useState<string>("");
  const [pathId, setPathId] = useState<string>("");


  const handleCaptionChange = (newCaption: string) => {
    const newPathId = newCaption.toLowerCase().replace(/\s+/g, "-");
    setCaption(newCaption);
    setPathId(newPathId);
  };

  return (
    <>
      <form
        className={styles.CreationForm}
        ref={formRef}
        action={(data) =>
          createPost(data).then(() => {
            formRef.current?.reset();
            router.refresh();
          })
        }
      >

        <InputBar type="text" name="banner" placeholder="Banner link goes here" />

        <InputBar type="text" name="caption" defaultValue={caption} onCaptionChange={handleCaptionChange} placeholder="Caption goes here" />

        <InputBar type="text" name="pathid" defaultValue={pathId} placeholder="Unique Path ID goes here" />

        <InputBar type="text" name="url" placeholder="Project URL goes here" />

        <FormButton />

      </form>

    </>
  );
}

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={styles.Btn}
    >
      {pending ? <LoadingDots /> : <p>Create</p>}
    </button>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  let [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      style={{ background: 'transparent'}}
      onClick={() =>
        startTransition(() =>
          deletePost(id).then(() => {
            router.refresh();
          })
        )
      }
      disabled={isPending}
    >
      {isPending ?
        <LoadingDots />
        :
        <div className={styles.DeleteButton}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.DeleteIcon} viewBox="0 0 119 119" fill="#FFEDED">
            <path d="M97.0646 34.4062C97.0646 33.371 96.6209 32.375 95.8264 31.6445C95.0362 30.9101 93.9586 30.5 92.8388 30.5H79.236L77.2963 23.3242C76.4511 20.1914 73.4043 17.9961 69.9138 18H48.1508C44.6602 17.9961 41.6134 20.1914 40.7683 23.3242L38.8286 30.5H25.2258C22.8932 30.5 21 32.25 21 34.4062C21 36.5624 22.8932 38.3124 25.2258 38.3124H25.4455C25.1413 39.4062 25.0399 40.5429 25.1413 41.6679L30.2462 88.8519C30.9646 95.6527 37.1554 100.832 44.5467 100.813H73.5189C80.9099 100.832 87.1011 95.6527 87.8194 88.8519L92.9243 41.6639C93.0258 40.5389 92.9201 39.4061 92.6201 38.3123H92.8398C93.9597 38.3123 95.0372 37.9021 95.8275 37.1678C96.6219 36.4373 97.0646 35.4413 97.0646 34.4062ZM48.8058 25.8124H69.2543L70.5221 30.4999H47.5378L48.8058 25.8124ZM83.8675 39.0824C84.3492 39.5707 84.5859 40.2308 84.5098 40.891L79.4049 88.075C79.1133 90.8758 76.5609 93.0086 73.5183 93.0008H44.5462C41.5035 93.0086 38.9511 90.8758 38.6595 88.075L33.5547 40.895C33.4828 40.2348 33.7152 39.5786 34.197 39.0864C34.6787 38.5942 35.3591 38.313 36.0775 38.313H81.9877C82.7061 38.3091 83.3858 38.5902 83.8675 39.0824Z" />
            <path d="M52.2708 49.2502C51.1509 49.2502 50.0734 49.6604 49.2832 50.3947C48.4887 51.1252 48.045 52.1213 48.045 53.1564V71.9064C48.045 74.0626 49.9382 75.8126 52.2708 75.8126C54.6034 75.8126 56.4966 74.0626 56.4966 71.9064V53.1564C56.4966 52.1212 56.0529 51.1252 55.2585 50.3947C54.4682 49.6603 53.3906 49.2502 52.2708 49.2502Z" />
            <path d="M65.7935 49.2502C64.6737 49.2502 63.5962 49.6604 62.8059 50.3947C62.0114 51.1252 61.5677 52.1213 61.5677 53.1564V71.9064C61.5677 74.0626 63.4609 75.8126 65.7935 75.8126C68.1262 75.8126 70.0193 74.0626 70.0193 71.9064V53.1564C70.0193 52.1212 69.5756 51.1252 68.7812 50.3947C67.991 49.6603 66.9133 49.2502 65.7935 49.2502Z" />
          </svg>
        </div>
      }
    </button>
  );
};

