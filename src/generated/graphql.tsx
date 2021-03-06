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
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  id: Scalars['ID'];
  token: Scalars['String'];
};


export type LineUser = {
  __typename?: 'LineUser';
  fixedProfile: LineUserProfile;
  id: Scalars['ID'];
};

export type LineUserProfile = {
  __typename?: 'LineUserProfile';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MonthlyInfo = {
  __typename?: 'MonthlyInfo';
  amount: Scalars['Int'];
  id: Scalars['ID'];
  lineUser: LineUser;
  purchased: MonthlyInfoPurchased;
  reportedOn: Scalars['ISO8601Date'];
  workFromHomeCount: Scalars['Int'];
};

export enum MonthlyInfoPurchased {
  Yes = 'YES',
  No = 'NO'
}

export type Mutation = {
  __typename?: 'Mutation';
  signIn?: Maybe<SignInPayload>;
};


export type MutationSignInArgs = {
  input: SignInInput;
};

export type Query = {
  __typename?: 'Query';
  monthlyInfos: Array<Maybe<MonthlyInfo>>;
  viewer?: Maybe<User>;
};


export type QueryMonthlyInfosArgs = {
  year: Scalars['Int'];
  month: Scalars['Int'];
};

/** Autogenerated input type of SignIn */
export type SignInInput = {
  loginid?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SignIn */
export type SignInPayload = {
  __typename?: 'SignInPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<AccessToken>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SignInMutationVariables = Exact<{
  loginid?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'SignInPayload' }
    & Pick<SignInPayload, 'result'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & { accessToken?: Maybe<(
        { __typename?: 'AccessToken' }
        & Pick<AccessToken, 'token'>
      )> }
    )> }
  )> }
);

export type MonthlyInfosQueryVariables = Exact<{
  year: Scalars['Int'];
  month: Scalars['Int'];
}>;


export type MonthlyInfosQuery = (
  { __typename?: 'Query' }
  & { monthlyInfos: Array<Maybe<(
    { __typename?: 'MonthlyInfo' }
    & Pick<MonthlyInfo, 'workFromHomeCount' | 'purchased' | 'amount'>
    & { lineUser: (
      { __typename?: 'LineUser' }
      & { fixedProfile: (
        { __typename?: 'LineUserProfile' }
        & Pick<LineUserProfile, 'name'>
      ) }
    ) }
  )>> }
);

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);


export const SignInDocument = gql`
    mutation signIn($loginid: String, $password: String) {
  signIn(input: {loginid: $loginid, password: $password}) {
    user {
      accessToken {
        token
      }
    }
    result
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      loginid: // value for 'loginid'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const MonthlyInfosDocument = gql`
    query monthlyInfos($year: Int!, $month: Int!) {
  monthlyInfos(year: $year, month: $month) {
    workFromHomeCount
    purchased
    amount
    lineUser {
      fixedProfile {
        name
      }
    }
  }
}
    `;

/**
 * __useMonthlyInfosQuery__
 *
 * To run a query within a React component, call `useMonthlyInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonthlyInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonthlyInfosQuery({
 *   variables: {
 *      year: // value for 'year'
 *      month: // value for 'month'
 *   },
 * });
 */
export function useMonthlyInfosQuery(baseOptions: Apollo.QueryHookOptions<MonthlyInfosQuery, MonthlyInfosQueryVariables>) {
        return Apollo.useQuery<MonthlyInfosQuery, MonthlyInfosQueryVariables>(MonthlyInfosDocument, baseOptions);
      }
export function useMonthlyInfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MonthlyInfosQuery, MonthlyInfosQueryVariables>) {
          return Apollo.useLazyQuery<MonthlyInfosQuery, MonthlyInfosQueryVariables>(MonthlyInfosDocument, baseOptions);
        }
export type MonthlyInfosQueryHookResult = ReturnType<typeof useMonthlyInfosQuery>;
export type MonthlyInfosLazyQueryHookResult = ReturnType<typeof useMonthlyInfosLazyQuery>;
export type MonthlyInfosQueryResult = Apollo.QueryResult<MonthlyInfosQuery, MonthlyInfosQueryVariables>;
export const ViewerDocument = gql`
    query viewer {
  viewer {
    id
  }
}
    `;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
      }
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;