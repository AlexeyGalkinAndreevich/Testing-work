const ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id_aplication",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "cod_word",
        type: "bytes32",
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
    name: "canceling_owner_transfer",
    outputs: [],
    stateMutability: "payable",
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
    name: "canceling_recipient_transfer",
    outputs: [],
    stateMutability: "payable",
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
        name: "new_add",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "new_pass",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "new_name",
        type: "string",
      },
    ],
    name: "reg",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "bytes32",
        name: "cod_word",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "new_add",
        type: "address",
      },
    ],
    name: "reg_test",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes32",
        name: "your_pass",
        type: "bytes32",
      },
    ],
    name: "sing_in",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
            internalType: "bool",
            name: "statusOwner",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "statusRecipient",
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
            internalType: "bytes32",
            name: "password",
            type: "bytes32",
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
export default ABI;
