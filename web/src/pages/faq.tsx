import { useTranslation } from "react-i18next";

interface AnsweredQuestionProps {
  questionCode: string;
}
const AnsweredQuestion = ({ questionCode }: AnsweredQuestionProps) => {
  const { t } = useTranslation("common");
  return (
    <div class="mt-4">
      <h2>{t(`pages.faq.${questionCode}.q`)}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: t(`pages.faq.${questionCode}.a`),
        }}
      />
    </div>
  );
};

export const FAQ = () => {
  const { t } = useTranslation("common");
  return (
    <div class="text-center">
      <h1>{t("FAQ")}</h1>
      <div class="flex flex-col">
        <AnsweredQuestion questionCode="attireLevel" />
        <AnsweredQuestion questionCode="bringGift" />
        <AnsweredQuestion questionCode="stayInBrooks" />
        <AnsweredQuestion questionCode="bringMoney" />
        <AnsweredQuestion questionCode="dietaryRestriction" />
      </div>
    </div>
  );
};
