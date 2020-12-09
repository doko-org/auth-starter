import React, { useState } from 'react';
import { useFindMany } from 'doko';
import styled from 'styled-components';

import { Example } from '../types';
import { ExampleForm } from '../components/ExampleForm';

// TODO test populate here

const Th = styled('th')<{ active: boolean }>`
  color: ${({ active }) => (active ? 'blue' : 'black')};
  cursor: pointer;
`;

const ColumnHeader: React.FC<{
  field: string;
  active: string;
  setOrder(field: string): void;
}> = ({ field, setOrder, active }) => {
  return (
    <Th
      onClick={() => {
        if (field === active) {
          setOrder('-' + field);
        } else {
          setOrder(field);
        }
      }}
      active={field === active || '-' + field === active}
    >
      {'-' + field === active ? <span>▼</span> : null}
      {field === active ? <span>▲</span> : null}
      {field}
    </Th>
  );
};

export const Home: React.FC = () => {
  const [orderBy, setOrderBy] = useState<string>('name');
  const [pageSize, setPageSize] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  const { items, loading, fetchMore, hasMore, refetch } = useFindMany<Example>(
    'example',
    {
      page,
      pageSize,
      where: {},
      orderBy,
    },
    { pagination: true }
  );

  if (loading) return <span>loading...</span>;

  function setOrder(field: string) {
    setOrderBy(field);
  }

  return (
    <div>
      <ExampleForm />
      <h3>---</h3>

      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setPageSize(Number(e.target.value))
        }
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>

      <table>
        <thead>
          <tr>
            <ColumnHeader active={orderBy} field="name" setOrder={setOrder} />
            <ColumnHeader active={orderBy} field="amount" setOrder={setOrder} />
            <ColumnHeader active={orderBy} field="done" setOrder={setOrder} />
            <ColumnHeader
              active={orderBy}
              field="lastUpdated"
              setOrder={setOrder}
            />
          </tr>
        </thead>

        <tbody>
          {items.map(i => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.amount}</td>
              <td>{i.done ? 'true' : 'false'}</td>
              <td>{i.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {hasMore ? <button onClick={() => fetchMore()}>Load more</button> : null}

      {page === 2 ? (
        <button onClick={() => setPage(page - 1)}>Prev page</button>
      ) : null}
      {hasMore ? (
        <button onClick={() => setPage(page + 1)}>Next page</button>
      ) : null}

      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
};
