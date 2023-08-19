import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// context
import { useAppContext } from "../../contexts/AppProvider";

// consts
import { difficultyColorMap } from "./consts";

// components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
} from "@chakra-ui/react";

const ProblemsList = () => {
  const [problems, setProblems] = useState(null);
  const { user } = useAppContext();

  const getAllPrograms = async () => {
    const res = await fetch("/problem/all", {
      method: "GET",
      headers: { Authorization: `Bearer ${user?.token}` },
    });
    const resJson = await res.json();
    if (resJson?.status === "ok") {
      setProblems(resJson?.problems);
    }
  };

  useEffect(() => {
    if (!problems) getAllPrograms();
  }, [user]);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Title</Th>
            <Th>Acceptance</Th>
            <Th>Difficulty</Th>
          </Tr>
        </Thead>
        <Tbody>
          {problems?.map((problem) => {
            // To-Do add status logic
            return (
              <Tr>
                <Td>status</Td>
                <Td>
                  <Link to={`/problem/${problem?.id}`}>{problem?.title}</Link>
                </Td>
                <Td>{problem?.acceptance}</Td>
                <Td>
                  <Badge colorScheme={difficultyColorMap[problem?.difficulty]}>
                    {problem?.difficulty}
                  </Badge>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProblemsList;
