import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type TestFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type TestFieldQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'testField'>
);


export const TestFieldDocument = gql`
    query testField {
  testField
}
    `;

/**
 * __useTestFieldQuery__
 *
 * To run a query within a React component, call `useTestFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestFieldQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestFieldQuery(baseOptions?: Apollo.QueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
        return Apollo.useQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, baseOptions);
      }
export function useTestFieldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
          return Apollo.useLazyQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, baseOptions);
        }
export type TestFieldQueryHookResult = ReturnType<typeof useTestFieldQuery>;
export type TestFieldLazyQueryHookResult = ReturnType<typeof useTestFieldLazyQuery>;
export type TestFieldQueryResult = Apollo.QueryResult<TestFieldQuery, TestFieldQueryVariables>;