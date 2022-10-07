export default ABI
function ABI() {
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id_aplication",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "cod_word",
          type: "string",
        },
      ],
      name: "acceptance_of_translation",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id_aplication",
          type: "uint256",
        },
      ],
      name: "canceling_a_transfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "candidate",
          type: "address",
        },
      ],
      name: "createVoid",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id_voices",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "status_answer",
          type: "bool",
        },
      ],
      name: "give_voice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "your_add",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "your_pass",
          type: "uint256",
        },
      ],
      name: "reg",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "login",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "sum",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "cod_word",
          type: "string",
        },
      ],
      name: "translation_formation",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "giveNum",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "view_aplications",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "cod_word",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "sum",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "trys",
              type: "uint256",
            },
          ],
          internalType: "struct bank.aplication[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      name: "view_people",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "admin",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "password",
              type: "uint256",
            },
          ],
          internalType: "struct bank.people",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "voices",
      outputs: [
        {
          internalType: "address",
          name: "candidate",
          type: "address",
        },
        {
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return abi;
}
