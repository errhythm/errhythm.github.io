import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';

const StyledTestimonial = styled.div`
  background-color: var(--light-navy);
  border-radius: 10px;
  padding: 25px;
  margin-top: 20px;
  margin-bottom: 50px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: 'Testimonial';
    background: var(--green);
    color: var(--navy);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0 0 3px 3px;
    position: absolute;
    opacity: 0.5;
    top: 0;
    right: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ClientImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const ClientInfo = styled.div`
  flex-grow: 1;
`;

const ClientName = styled.h4`
  margin: 0;
  color: var(--lightest-slate);
`;

const ClientCompany = styled.p`
  margin: 0;
  color: var(--slate);
  font-size: var(--fz-sm);
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;

const StarWrapper = styled.span`
  color: ${props => (props.filled ? 'var(--green)' : 'var(--slate)')};
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;

const TestimonialContent = styled.p`
  color: var(--light-slate);
  font-style: italic;
`;

const Testimonial = ({ name, company, image, rating, content }) => (
  <StyledTestimonial>
    <TestimonialHeader>
      <ClientImage src={image} alt={name} />
      <ClientInfo>
        <ClientName>{name}</ClientName>
        <ClientCompany>{company}</ClientCompany>
      </ClientInfo>
      <Rating>
        {[...Array(5)].map((_, i) => (
          <StarWrapper key={i} filled={i < rating}>
            <Icon name="FilledStar" />
          </StarWrapper>
        ))}
      </Rating>
    </TestimonialHeader>
    <TestimonialContent>{content}</TestimonialContent>
  </StyledTestimonial>
);

export default Testimonial;
