import styled from "styled-components";
import { FormField } from "@/Components/FormField";

const Section = styled.section`
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 4px;

  @media(min-width: 768px){
    width: 45%;
    &:nth-of-type(1){
      margin-right: 2rem;
    }
  }
`;

const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const SectionDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
`;

const EditProfile = ({ form, formFields, headerTexts, children, submit }) => {
  return (
    <Section>
      <header>
        <SectionHeading>{headerTexts.title}</SectionHeading>
        <SectionDesc>{headerTexts.desc}</SectionDesc>
      </header>

      {form ? (
        <form onSubmit={submit}>
          {formFields
            ? formFields.map((field, index) => {
                return (
                  <div key={index}>
                    <FormField
                      id={field.id}
                      ref={field.ref ? field.ref : null}
                      value={form.data[field.id]}
                      label={field.label}
                      handleChange={(e) =>
                        form.setData(field.id, e.target.value)
                      }
                      errorMessage={form.errors[field.id]}
                      type={field.type}
                      required={field.required}
                      autoComplete={field.id}
                    />
                  </div>
                );
              })
            : null}
          {children ? children : null}
        </form>
      ) : (
        children
      )}
    </Section>
  );
};

export default EditProfile;
