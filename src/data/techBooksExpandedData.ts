import { EBookItem } from '../types';

export const TECH_BOOKS_EXPANDED_DATA: EBookItem[] = [
  // ==========================================
  // TECHNOLOGY & COMPUTERS / LINUX
  // ==========================================
  {
    id: 'linux-cli-shell-scripting-mastery',
    title: 'Linux Command Line, Bash & System Administration Handbook',
    subtitle: 'From Terminal Basics to Shell Scripting, Permissions, Systemd & Server Automation',
    author: 'Er. Hariom & HK Linux Team',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Technology & Computers',
    subcategory: 'Operating Systems',
    bookType: 'Handbook',
    pages: 350,
    format: 'E-Book + Terminal Sandbox Code',
    difficulty: 'Intermediate',
    rating: 4.97,
    reviewCount: 460,
    badge: 'FOSS Classic',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-600 to-slate-900',
    tags: ['Linux', 'Bash', 'Ubuntu', 'Terminal', 'DevOps', 'System Administration', 'Shell Scripting'],
    topics: ['FHS Directory Hierarchy', 'File Permissions & chmod/chown', 'Pipes & Redirection', 'grep, awk & sed', 'Bash Scripting Logic', 'Process Monitoring (top, htop, ps)', 'Systemd Service Management', 'SSH Key Authentication & Hardening'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'Free and Open Source Software (FOSS) Community & HK Tech Labs',
    whatYoullLearn: [
      'Navigate the Linux Filesystem Hierarchy Standard (/etc, /var, /bin, /usr, /proc)',
      'Octal permissions calculation (chmod 755, 644) and user/group ownership administration',
      'Chain terminal commands with stdin, stdout, stderr redirects and pipelines (|)',
      'Parse logs and text data with regular expressions using grep, awk, and sed stream editor',
      'Write production Bash scripts with error handling (set -euo pipefail), functions, and cron jobs',
      'Manage systemd background units and secure remote servers using SSH key pairs'
    ],
    tableOfContents: [
      'Chapter 1: The Linux Philosophy & Filesystem Hierarchy Standard (FHS)',
      'Chapter 2: Essential Commands: Navigation, File Manipulation & Viewing (cat, less, head, tail)',
      'Chapter 3: File Permissions, Ownership & Special Bits (SUID, SGID, Sticky Bit)',
      'Chapter 4: Streams, Redirection (>, >>, 2>&1) and Command Pipelines',
      'Chapter 5: Text Processing Powerhouses: grep, awk, sed, tr & cut',
      'Chapter 6: Process Management, Memory Inspection (top, kill, systemctl) & Cron Scheduling',
      'Chapter 7: Bash Scripting: Variables, Loops, Conditionals & Safe Shell Best Practices',
      'Chapter 8: Linux Networking: curl, netstat, ip, ping, dig & iptables Firewalls',
      'Chapter 9: SSH Key Generation, Config Hardening & Remote Server Maintenance'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: File Permissions, chmod & Octal Math',
        summary: 'Deep dive into Unix permission masks for User, Group, and Others across Read (4), Write (2), and Execute (1). Demystifies why executing scripts requires read+execute permissions on directories.',
        keyPoints: [
          'Binary to octal mapping: rwx = 4 + 2 + 1 = 7; r-x = 4 + 0 + 1 = 5; r-- = 4 + 0 + 0 = 4.',
          'Directory permissions differ from files: \'execute\' (x) on a directory means permission to cd (enter) and search within it.',
          'Sticky bit (1000 or chmod +t) on /tmp ensures only file owners can delete their own files in shared directories.'
        ],
        codeSnippet: `#!/usr/bin/env bash
# Robust Bash Script Template by Hariom
set -euo pipefail

BACKUP_DIR="/var/backups/daily"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "[INFO] Starting backup at \${TIMESTAMP}..."
mkdir -p "\${BACKUP_DIR}"

tar -czf "\${BACKUP_DIR}/app_backup_\${TIMESTAMP}.tar.gz" /var/www/html 2>/dev/null

echo "[SUCCESS] Backup created successfully in \${BACKUP_DIR}"`,
        realWorldUse: 'Daily operations for backend engineers, cloud architects, DevOps practitioners, and cybersecurity investigators.'
      }
    ],
    studyNotes: [
      'Always start critical shell scripts with "set -euo pipefail": -e exits on error, -u treats unset variables as errors, -o pipefail preserves pipeline error exit codes.',
      'To view system logs in real time, use "journalctl -u service_name -f" or "tail -f /var/log/syslog".'
    ]
  },
  {
    id: 'computer-hardware-pc-architecture',
    title: 'Computer Hardware Architecture, PC Assembly & Diagnostics Handbook',
    subtitle: 'CPUs, Motherboards, PCIe 5.0, NVMe SSDs, Power Supplies & Step-by-Step Diagnostics',
    author: 'Er. Hariom & HK Hardware Lab',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Technology & Computers',
    subcategory: 'Hardware & Systems',
    bookType: 'Handbook',
    pages: 310,
    format: 'E-Book + Illustrated Assembly Charts',
    difficulty: 'Beginner',
    rating: 4.92,
    reviewCount: 390,
    badge: 'Hands-on Hardware',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-700 to-indigo-950',
    tags: ['Hardware', 'PC Building', 'CPU', 'RAM', 'SSD', 'Motherboard', 'Troubleshooting', 'BIOS'],
    topics: ['Microprocessor Architecture (Cores, Threads, Cache)', 'Motherboard Chipsets & VRMs', 'DDR4 vs DDR5 RAM Channels', 'Storage: SATA vs NVMe PCIe 4.0/5.0', 'Power Supply Efficiency (80 Plus Ratings)', 'Thermal Management & Liquid Cooling', 'BIOS/UEFI Configuration', 'POST Beep Codes & Hardware Diagnostics'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK Hardware Research Laboratory',
    whatYoullLearn: [
      'Understand how modern CPUs execute instructions (Fetch, Decode, Execute, Branch Prediction)',
      'Select compatible parts: Socket types (AM5 vs LGA1700), VRM power phases, and form factors (ATX, mATX, ITX)',
      'Dual-channel RAM configuration, latency timings (CL ratings), and XMP/EXPO profiles',
      'Step-by-step PC assembly guide without bending pins or causing static ESD damage',
      'Diagnose POST failure, RAM initialization errors, thermal throttling, and blue screen of death (BSOD)'
    ],
    tableOfContents: [
      'Chapter 1: The Modern Personal Computer Architecture: Bus Topology & Southbridge/Northbridge Evolution',
      'Chapter 2: The Central Processing Unit (CPU): Architecture, Cache Hierarchy (L1, L2, L3) & TDP',
      'Chapter 3: Motherboards Demystified: Sockets, PCIe Lanes, VRM Phases & Chipsets',
      'Chapter 4: Memory (RAM): DDR4 vs DDR5, Channels, Latency & Overclocking Profiles',
      'Chapter 5: Storage Technologies: HDDs, NAND Flash, NVMe Gen4/5 & Read/Write Endurance (TBW)',
      'Chapter 6: Graphics Processing Units (GPUs): Shaders, VRAM Bandwidth & Ray Tracing Cores',
      'Chapter 7: Power Supply Units (PSUs): Rail Topology, Ripple Suppression & 80 Plus Standards',
      'Chapter 8: Thermal Dynamics: Air Coolers, AIO Liquid Coolers, Paste Application & Fan Curves',
      'Chapter 9: The Assembly Protocol: Step-by-Step Bench Testing to Final Enclosure Assembly',
      'Chapter 10: Troubleshooting Playbook: POST Codes, Debug LEDs, Memory Faults & Driver Conflicts'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 9: The Assembly Protocol & Debugging POST Failures',
        summary: 'Walks through the precise sequence of building a high-performance PC safely: installing CPU, dual-channel RAM in slots A2/B2, NVMe standoff screws, applying thermal compound using the pea/cross pattern, and debugging when the motherboard powers on but shows no display.',
        keyPoints: [
          'Dual-channel rule: On 4-slot motherboards, always populate slots 2 and 4 (A2 and B2) first for optimum trace routing.',
          'Never skimp on the Power Supply: Tier A/B units provide clean voltage regulation with Over-Voltage (OVP) and Short-Circuit (SCP) protection.',
          'Debug LEDs (CPU, DRAM, VGA, BOOT) isolate exactly which subsystem failed during the Power-On Self-Test (POST).'
        ],
        codeSnippet: `Hardware Diagnostics Checklist:
1. No Display / Fans Spinning:
   - Check Debug LEDs on motherboard.
   - Reseat RAM sticks firmly until both clips click.
   - Verify monitor HDMI/DP cable is plugged into GPU, NOT motherboard!
2. Sudden System Shutdown under load:
   - Monitor CPU/GPU junction temperatures using HWMonitor/CoreTemp.
   - Verify plastic protective peel was removed from cooler cold plate!`,
        realWorldUse: 'Crucial for PC enthusiasts, computer lab technicians, IT administrators, and hardware support engineers.'
      }
    ],
    studyNotes: [
      'Always install CPU into the socket without applying downward force (Zero Insertion Force / ZIF). Align the gold triangle on the processor with the indicator on the socket.',
      'M.2 NVMe SSDs connect directly to CPU and chipset PCIe lanes, delivering speeds over 7,000 MB/s compared to traditional SATA SSDs capped at 550 MB/s.'
    ]
  },

  // ==========================================
  // ARTIFICIAL INTELLIGENCE
  // ==========================================
  {
    id: 'deep-learning-pytorch-scratch',
    title: 'Deep Learning & Neural Networks with PyTorch from Scratch',
    subtitle: 'Tensors, Autograd, Backpropagation, CNNs, RNNs & Production Model Deployment',
    author: 'Er. Hariom & HK AI Research Team',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Artificial Intelligence',
    subcategory: 'Machine Learning & AI',
    bookType: 'Handbook',
    pages: 390,
    format: 'E-Book + PyTorch Jupyter Notebooks',
    difficulty: 'Advanced',
    rating: 4.98,
    reviewCount: 510,
    badge: 'AI Research Grade',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-purple-700 to-indigo-900',
    tags: ['AI', 'Deep Learning', 'PyTorch', 'Neural Networks', 'Computer Vision', 'Tensors', 'Backpropagation'],
    topics: ['Tensor Operations & GPU Acceleration', 'Automatic Differentiation (Autograd)', 'Building Custom nn.Module Layers', 'Loss Functions & Optimizers (Adam, SGD)', 'Convolutional Neural Networks (CNNs)', 'Residual Networks (ResNet & Skip Connections)', 'Transfer Learning & Fine-Tuning', 'Model Quantization & ONNX Export'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK Tech World Artificial Intelligence Lab',
    whatYoullLearn: [
      'Understand forward propagation, loss calculation, and computational graph backpropagation mathematically',
      'Create custom PyTorch architectures inheriting from torch.nn.Module with parameter management',
      'Implement convolutional filters, pooling, batch normalization, and dropout to prevent overfitting',
      'Leverage pre-trained vision models (ResNet, EfficientNet) using transfer learning on custom datasets',
      'Optimize training with learning rate schedulers, mixed-precision training (torch.cuda.amp), and TensorBoard logging'
    ],
    tableOfContents: [
      'Chapter 1: The Foundations of Deep Learning: Perceptrons to Multi-Layer Networks',
      'Chapter 2: PyTorch Tensors & Hardware Acceleration (CPU vs CUDA vs Apple MPS)',
      'Chapter 3: The Autograd Engine: Computational Graphs & Gradient Descent Mechanics',
      'Chapter 4: Designing Custom Models with torch.nn.Module & DataLoader Pipelines',
      'Chapter 5: Loss Functions (CrossEntropy, MSE, BCE) & Adaptive Optimizers (AdamW, RMSprop)',
      'Chapter 6: Convolutional Neural Networks (CNNs): Spatial Filters, Strides & Pooling',
      'Chapter 7: Modern CNN Architectures: VGG, ResNet Skip Connections & Inception Modules',
      'Chapter 8: Recurrent Neural Networks (RNNs) & LSTMs for Sequence Modeling',
      'Chapter 9: Model Regularization: Dropout, Weight Decay & Data Augmentation Pipelines',
      'Chapter 10: Exporting Models to ONNX & Deploying with TorchScript / FastAPI'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Designing Custom PyTorch Neural Networks with nn.Module',
        summary: 'Walks through writing clean, production-grade PyTorch code. Explains parameter initialization, the __init__ definition of layers, and the forward() method passing activations through ReLU non-linearities.',
        keyPoints: [
          'nn.Module keeps track of all learnable weights (weights and biases) automatically.',
          'CrossEntropyLoss in PyTorch combines LogSoftmax and NLLLoss into a single numerically stable function, meaning raw logits should be passed without applying Softmax manually.',
          'Always zero gradients before backward pass (optimizer.zero_grad()) to prevent gradient accumulation across batches.'
        ],
        codeSnippet: `import torch
import torch.nn as nn

# Custom Multi-Layer Perceptron in PyTorch
class DeepClassifier(nn.Module):
    def __init__(self, input_dim, hidden_dim, num_classes):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.BatchNorm1d(hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.25),
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.ReLU(),
            nn.Linear(hidden_dim // 2, num_classes) # Raw logits
        )
        
    def forward(self, x):
        return self.net(x)

# Instantiate model on CUDA if available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = DeepClassifier(input_dim=784, hidden_dim=256, num_classes=10).to(device)
print(model)`,
        realWorldUse: 'Used across autonomous vehicles, medical imaging diagnostics, recommendation engines, and modern generative AI.'
      }
    ],
    studyNotes: [
      'Always switch between model.train() and model.eval() modes. In eval mode, Dropout is deactivated and BatchNorm uses running mean/variance.',
      'With torch.no_grad(): wrap validation and inference loops inside this context manager to disable graph tracking and reduce memory consumption by up to 50%.'
    ]
  },
  {
    id: 'nlp-transformers-llm-masterclass',
    title: 'Natural Language Processing & Transformer Architecture Masterclass',
    subtitle: 'From Tokenization & Word2Vec to Self-Attention, BERT, GPT, LoRA & Modern LLMs',
    author: 'Er. Hariom & HK AI Research Team',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Artificial Intelligence',
    subcategory: 'Natural Language Processing',
    bookType: 'Handbook',
    pages: 410,
    format: 'E-Book + Transformer Architecture Diagrams',
    difficulty: 'Advanced',
    rating: 4.99,
    reviewCount: 570,
    badge: 'State of the Art',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-fuchsia-700 to-indigo-900',
    tags: ['AI', 'NLP', 'Transformers', 'LLMs', 'Attention Mechanism', 'BERT', 'GPT', 'PyTorch'],
    topics: ['Tokenization (BPE, WordPiece)', 'Embeddings & Vector Spaces', 'Scaled Dot-Product Attention', 'Multi-Head Attention Math', 'Encoder vs Decoder Transformers (BERT vs GPT)', 'Positional Encodings (Sinusoidal & RoPE)', 'Fine-Tuning with LoRA / QLoRA', 'Retrieval-Augmented Generation (RAG)'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK Tech World Artificial Intelligence Lab',
    whatYoullLearn: [
      'Step-by-step mathematical derivation of Self-Attention: Attention(Q, K, V) = softmax(Q * K^T / sqrt(dk)) * V',
      'Understand Byte-Pair Encoding (BPE) and tokenization algorithms used by modern LLMs',
      'The key difference between Encoder-only (BERT for classification), Decoder-only (GPT for generation), and Encoder-Decoder (T5) architectures',
      'Rotary Position Embedding (RoPE) and its impact on long-context window scaling',
      'Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA)',
      'Architect production RAG systems with dense vector similarity search (cosine, dot product)'
    ],
    tableOfContents: [
      'Chapter 1: The Evolution of NLP: Rule-based to N-grams, Word2Vec, GloVe & RNNs',
      'Chapter 2: The Bottlenecks of Recurrent Networks & The Dawn of "Attention Is All You Need"',
      'Chapter 3: Tokenization in Modern LLMs: Byte-Pair Encoding (BPE), WordPiece & SentencePiece',
      'Chapter 4: Scaled Dot-Product Attention & Multi-Head Self-Attention in Pure PyTorch',
      'Chapter 5: Positional Encoding: Absolute Sinusoidal, Learnable, and Rotary Embeddings (RoPE)',
      'Chapter 6: The Transformer Encoder: LayerNorm, Feed-Forward Networks & Residual Connections',
      'Chapter 7: The Transformer Decoder: Masked Causal Self-Attention & Autoregressive Decoding',
      'Chapter 8: Pre-training vs Fine-Tuning: Masked Language Modeling vs Next-Token Prediction',
      'Chapter 9: Parameter-Efficient Fine-Tuning (PEFT) with LoRA, QLoRA & Quantization (4-bit/8-bit)',
      'Chapter 10: Building Retrieval-Augmented Generation (RAG) with Vector Databases'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Scaled Dot-Product Attention & Multi-Head Math',
        summary: 'Deconstructs the mathematical heartbeat of modern Large Language Models: Queries, Keys, and Values. Explains why scaling by sqrt(dk) prevents softmax gradients from vanishing into regions with near-zero derivatives.',
        keyPoints: [
          'Queries (Q) represent what the token is searching for; Keys (K) represent what the token contains; Values (V) represent the actual content transmitted.',
          'Dividing by sqrt(dk) keeps the variance of the dot product equal to 1, preventing the softmax output from saturating at extreme values.',
          'Multi-Head Attention allows the model to attend to information from different representation subspaces at different positions simultaneously.'
        ],
        codeSnippet: `import torch
import torch.nn.functional as F

def scaled_dot_product_attention(Q, K, V, mask=None):
    """
    Q, K, V shape: [batch_size, num_heads, seq_len, d_k]
    """
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / (d_k ** 0.5)
    
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))
        
    weights = F.softmax(scores, dim=-1)
    output = torch.matmul(weights, V)
    return output, weights`,
        realWorldUse: 'Powers ChatGPT, Claude, Gemini, modern machine translation, summarization, and coding assistants.'
      }
    ],
    studyNotes: [
      'In causal language models (GPT family), the attention mask is an upper-triangular matrix of -inf to ensure each token can only attend to previous tokens and never look ahead into future tokens.',
      'LoRA freezes the pre-trained model weights and injects trainable rank-decomposition matrices (A and B of rank r=8 or 16), reducing trainable parameters by over 99%.'
    ]
  },

  // ==========================================
  // CODING & PROGRAMMING
  // ==========================================
  {
    id: 'rust-systems-programming-handbook',
    title: 'The Rust Systems Programming Language Handbook',
    subtitle: 'Ownership, Borrowing, Lifetimes, Fearless Concurrency & Zero-Cost Abstractions',
    author: 'Er. Hariom & HK Systems Programming Group',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Coding & Programming',
    subcategory: 'Systems Programming',
    bookType: 'Handbook',
    pages: 370,
    format: 'E-Book + Cargo Codebase',
    difficulty: 'Advanced',
    rating: 4.98,
    reviewCount: 490,
    badge: 'Systems Gold',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-orange-700 to-stone-900',
    tags: ['Rust', 'Systems Programming', 'Memory Safety', 'Concurrency', 'Cargo', 'Linux', 'Performance'],
    topics: ['Ownership Rules', 'Borrow Checker & References', 'Explicit Lifetimes (\'a)', 'Pattern Matching & Enums', 'Error Handling (Result & Option)', 'Traits & Generics', 'Smart Pointers (Box, Rc, Arc, Mutex)', 'Async Rust with Tokio'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'The Rust Project & HK Systems Lab',
    whatYoullLearn: [
      'Understand the 3 golden ownership rules that guarantee memory safety without a garbage collector',
      'The borrow checker: Aliasing XOR Mutability (one mutable reference OR multiple immutable references)',
      'Annotate generic lifetimes on references in functions and structs to prevent dangling pointers',
      'Idiomatic error handling using Result<T, E>, Option<T>, and the ? try operator',
      'Thread-safe concurrency using message-passing channels (mpsc) and shared state (Arc<Mutex<T>>)',
      'Build high-performance asynchronous networking microservices using the Tokio runtime'
    ],
    tableOfContents: [
      'Chapter 1: Why Rust? Eliminating Memory Leaks, Buffer Overflows & Data Races at Compile Time',
      'Chapter 2: Variables, Mutability, Shadowing & Primitive Scalar/Compound Types',
      'Chapter 3: The Heart of Rust: The Ownership Paradigm & Stack vs Heap Allocation',
      'Chapter 4: References and Borrowing: The Rules of the Borrow Checker',
      'Chapter 5: Slices, Custom Structs & Method Syntax (impl blocks)',
      'Chapter 6: Enums and Pattern Matching: Replacing NULL with Option<T> & Exhaustive match',
      'Chapter 7: Packages, Crates and Modules in Cargo Project Layout',
      'Chapter 8: Error Handling: Recoverable Errors with Result<T, E> vs panic!',
      'Chapter 9: Generics, Traits & Trait Bounds (Static vs Dynamic Dispatch with dyn)',
      'Chapter 10: Validating References with Explicit Lifetimes (\'a, \'static)',
      'Chapter 11: Smart Pointers: Box<T>, Rc<T>, Arc<T>, RefCell<T> & Interior Mutability',
      'Chapter 12: Fearless Concurrency: Spawning Threads, Message Passing & Mutex Locks'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: Ownership and The Three Rules of Rust',
        summary: 'Rigorous exploration of how Rust achieves C++ performance without manual malloc/free or a garbage collection runtime. When an owner goes out of scope, Rust automatically calls the drop trait to reclaim heap memory.',
        keyPoints: [
          'Ownership Rule 1: Each value in Rust has an owner.',
          'Ownership Rule 2: There can only be one owner at a time (moving values transfers ownership).',
          'Ownership Rule 3: When the owner goes out of scope, the value will be dropped.',
          'Borrowing Rule: You may have any number of immutable references (&T), OR exactly one mutable reference (&mut T), but never both at the same time.'
        ],
        codeSnippet: `// Idiomatic Rust Thread-Safe Counter with Arc and Mutex
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter_clone.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final Counter Result: {}", *counter.lock().unwrap());
}`,
        realWorldUse: 'Powers operating systems (Linux kernel modules), browsers (Firefox Servo), cloud infrastructure (AWS Firecracker), and high-frequency trading.'
      }
    ],
    studyNotes: [
      'In Rust, clone() performs a deep copy of heap data, while copy is a shallow bitwise copy automatically implemented on types whose components live purely on the stack.',
      'The \'static lifetime indicates that the data can live for the entire duration of the running program (such as string literals embedded in binary rodata).'
    ]
  },
  {
    id: 'typescript-production-architecture',
    title: 'TypeScript in Depth: Production Architecture & Type Systems',
    subtitle: 'Generics, Mapped Types, Conditional Types, Type Narrowing, Zod & React 19 Integration',
    author: 'Er. Hariom & HK Web Architecture Cell',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Coding & Programming',
    subcategory: 'Web & App Development',
    bookType: 'Handbook',
    pages: 320,
    format: 'E-Book + Interactive TS Playground Examples',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 440,
    badge: 'Web Developer Essential',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-600 to-sky-900',
    tags: ['TypeScript', 'JavaScript', 'React', 'Generics', 'Type System', 'Node.js', 'Web Development'],
    topics: ['Type Inference vs Explicit Annotations', 'Interfaces vs Type Aliases', 'Discriminated Unions', 'Generics & Generic Constraints (T extends U)', 'Conditional Types & infer Keyword', 'Mapped Types & Key Remapping (as)', 'Utility Types (Partial, Pick, Omit, Record)', 'Runtime Schema Validation with Zod'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Full-Stack Engineering Team',
    whatYoullLearn: [
      'Differentiate structural type systems (duck typing) from nominal typing languages',
      'Model complex application states safely using Discriminated Unions and exhaustiveness checking',
      'Write reusable utility functions and components using Generics with extends constraints',
      'Master advanced type gymnastics: distributive conditional types, template literal types, and infer',
      'Bridge compile-time TypeScript types with runtime API payload validation using Zod schemas',
      'Architect robust React 19 components with strongly-typed props, hooks, and context'
    ],
    tableOfContents: [
      'Chapter 1: The Philosophy of TypeScript: JavaScript with Syntax for Types',
      'Chapter 2: Everyday Types, Type Inference, Type Assertions & Non-null Assertion Operator (!)',
      'Chapter 3: Interfaces vs Type Aliases: Declaration Merging & Extensibility',
      'Chapter 4: Type Narrowing: typeof, instanceof, in operator, and User-Defined Type Guards (is)',
      'Chapter 5: Discriminated Unions: Eliminating Impossible Application States',
      'Chapter 6: Generics Masterclass: Generic Functions, Interfaces, Classes & Constraints',
      'Chapter 7: Utility Types Demystified: Partial, Required, Readonly, Pick, Omit, Record, Exclude',
      'Chapter 8: Advanced Type Systems: Conditional Types & The infer Keyword',
      'Chapter 9: Template Literal Types & Key Remapping in Mapped Types',
      'Chapter 10: Runtime Validation with Zod & Generating Inferred Types',
      'Chapter 11: Production TypeScript with React 19: Strict Hooks, Context & Event Handlers'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Discriminated Unions & Exhaustiveness Checking',
        summary: 'Explains the single most effective TypeScript pattern for state management. By giving each state variant a shared literal discriminant property (like "status" or "type"), TypeScript narrows types automatically and catches missing cases at compile time.',
        keyPoints: [
          'Discriminated unions ensure that data associated with a specific state is only accessible when the state is active (e.g. error message only accessible when status === "error").',
          'Exhaustive switch-case checks can be enforced using the \'never\' type assignment in the default case.',
          'Never use \'any\'; prefer \'unknown\' when the incoming payload shape is unverified until narrowed.'
        ],
        codeSnippet: `// Type-Safe API State with Discriminated Unions
type NetworkState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T; timestamp: number }
  | { status: 'error'; error: Error };

function renderState<T>(state: NetworkState<T>): string {
  switch (state.status) {
    case 'idle': return 'Please initiate search...';
    case 'loading': return 'Fetching data...';
    case 'success': return \`Loaded: \${JSON.stringify(state.data)}\`;
    case 'error': return \`Error occurred: \${state.error.message}\`;
    default: {
      // Exhaustiveness check: fails to compile if a new state variant is added!
      const _exhaustive: never = state;
      return _exhaustive;
    }
  }
}`,
        realWorldUse: 'Standard architecture for modern enterprise React, Next.js, Node.js, and frontend engineering.'
      }
    ],
    studyNotes: [
      'In tsconfig.json, always enable "strict": true. It activates "noImplicitAny", "strictNullChecks", and "strictFunctionTypes".',
      'Use "type" when creating unions, primitives, tuples, or mapped types; use "interface" when creating extensible object contracts or library APIs.'
    ]
  },

  // ==========================================
  // WEB DEVELOPMENT
  // ==========================================
  {
    id: 'nextjs-react-fullstack-architecture',
    title: 'Full-Stack Next.js & React: Modern Architecture Handbook',
    subtitle: 'App Router, Server Components, Server Actions, Streaming SSR, Tailwind CSS & Prisma',
    author: 'Er. Hariom & HK Web Engineering Team',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Web Development',
    subcategory: 'Full-Stack Web',
    bookType: 'Handbook',
    pages: 380,
    format: 'E-Book + Next.js Starter Repos',
    difficulty: 'Intermediate',
    rating: 4.97,
    reviewCount: 475,
    badge: 'Industry Standard',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-slate-900 via-sky-950 to-slate-900',
    tags: ['Next.js', 'React', 'Full-Stack', 'Server Components', 'Tailwind CSS', 'TypeScript', 'Web Dev'],
    topics: ['App Router Architecture (layout, page, loading, error)', 'React Server Components (RSC) vs Client Components ("use client")', 'Data Fetching & Cache Strategies', 'Server Actions for Form Mutations', 'Streaming & Suspense Boundaries', 'Authentication with NextAuth / Auth.js', 'Database ORM Integration (Prisma / Drizzle)', 'SEO Optimization & Core Web Vitals'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Full-Stack Engineering Team',
    whatYoullLearn: [
      'Master the paradigm shift from Pages Router to App Router in modern Next.js',
      'Leverage React Server Components (RSC) to keep heavy dependencies and secrets on the server',
      'Mutate database records directly using type-safe Server Actions without writing boilerplate API routes',
      'Stream UI incrementally to the browser using React Suspense and dynamic loading skeletons',
      'Configure database access with Prisma ORM and connection pooling in serverless environments',
      'Optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) for peak SEO scores'
    ],
    tableOfContents: [
      'Chapter 1: The Modern Full-Stack Web: Why Next.js and The Server-First Renaissance',
      'Chapter 2: App Router Deep Dive: Folder Conventions (page.tsx, layout.tsx, template.tsx)',
      'Chapter 3: React Server Components (RSC) vs Client Components ("use client" boundaries)',
      'Chapter 4: Data Fetching in Server Components: Deduplication, Fetch Cache & Static vs Dynamic Rendering',
      'Chapter 5: Form Handling and Database Mutations with Server Actions & useActionState',
      'Chapter 6: Streaming UI with React Suspense & Instant Loading States (loading.tsx)',
      'Chapter 7: Route Handlers: Building RESTful and Webhook APIs in the App Router',
      'Chapter 8: Database Integration: Connecting PostgreSQL with Prisma & Drizzle ORM',
      'Chapter 9: Authentication & Session Management: Middleware Route Protection',
      'Chapter 10: Performance & Deployment: Static Site Generation (SSG), ISR, Vercel & Docker'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: React Server Components (RSC) vs Client Components',
        summary: 'Breaks down the core architecture of Next.js App Router: components are React Server Components by default. They run only on the server, have zero impact on client JavaScript bundle size, and can directly access databases and secrets without leaking tokens.',
        keyPoints: [
          'Server Components have direct access to backend resources (databases, filesystem, internal microservices).',
          'Client Components (\'use client\') are required only when using browser APIs (localStorage, window) or interactive React hooks (useState, useEffect, onClick).',
          'Passing Server Components as children to Client Components maintains zero client-side bundle size for the server tree.'
        ],
        codeSnippet: `// app/posts/page.tsx - React Server Component (Default)
import { Suspense } from 'react';
import PostsList from '@/components/PostsList';
import PostsSkeleton from '@/components/PostsSkeleton';

export const revalidate = 3600; // ISR: Revalidate every hour

export default async function PostsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-extrabold text-slate-100">Engineering Articles</h1>
      <Suspense fallback={<PostsSkeleton />}>
        {/* PostsList directly queries database on the server */}
        <PostsList />
      </Suspense>
    </main>
  );
}`,
        realWorldUse: 'The leading full-stack framework for modern SaaS products, e-commerce stores, and high-traffic portals.'
      }
    ],
    studyNotes: [
      'Never put sensitive environment variables (API secrets, database URLs) in variables prefixed with NEXT_PUBLIC_. Variables without this prefix are strictly server-side.',
      'In Next.js, revalidatePath() inside a Server Action clears the client-side router cache and triggers immediate server re-rendering.'
    ]
  },

  // ==========================================
  // CYBERSECURITY & DIGITAL SAFETY
  // ==========================================
  {
    id: 'web-penetration-testing-owasp-top-10',
    title: 'Web Application Penetration Testing & OWASP Top 10 Security Guide',
    subtitle: 'SQL Injection, XSS, CSRF, Broken Access Control, SSRF & Defensive Hardening',
    author: 'Er. Hariom & HK Cybersecurity Defense Cell',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Cybersecurity & Digital Safety',
    subcategory: 'Cybersecurity',
    bookType: 'Handbook',
    pages: 360,
    format: 'E-Book + Lab Testing Scenarios',
    difficulty: 'Advanced',
    rating: 4.98,
    reviewCount: 520,
    badge: 'Security Masterclass',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-red-700 via-rose-950 to-slate-950',
    tags: ['Cybersecurity', 'Ethical Hacking', 'OWASP', 'Penetration Testing', 'SQL Injection', 'XSS', 'Security'],
    topics: ['OWASP Top 10 Vulnerabilities', 'SQL Injection (SQLi) & Parameterized Queries', 'Cross-Site Scripting (Reflected, Stored, DOM XSS)', 'Broken Access Control (IDOR)', 'Cross-Site Request Forgery (CSRF)', 'Server-Side Request Forgery (SSRF)', 'Content Security Policy (CSP)', 'Burp Suite & Zed Attack Proxy (ZAP)'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'Open Web Application Security Project (OWASP) & HK Cyber Defense Cell',
    whatYoullLearn: [
      'Deconstruct the OWASP Top 10 vulnerabilities with real-world exploit mechanics and defense patches',
      'Prevent SQL Injection using parameterized prepared statements and ORMs instead of raw string concatenation',
      'Defend against Cross-Site Scripting (XSS) via contextual output encoding and strict Content Security Policies (CSP)',
      'Identify and remediate Insecure Direct Object References (IDOR) with server-side authorization checks',
      'Mitigate SSRF attacks in microservice and cloud architectures (metadata endpoint protection)',
      'Perform ethical penetration testing audits using Burp Suite community edition'
    ],
    tableOfContents: [
      'Chapter 1: The Cybersecurity Threat Landscape & Legal Boundaries of Ethical Hacking',
      'Chapter 2: The OWASP Top 10 Vulnerability Taxonomy Explained',
      'Chapter 3: Injection Attacks: SQLi (Union, Boolean, Time-based) & Prevention',
      'Chapter 4: Cross-Site Scripting (XSS): Reflected, Stored, DOM-based & CSP Defense',
      'Chapter 5: Broken Access Control: IDOR, Privilege Escalation & Role-Based Access Control (RBAC)',
      'Chapter 6: Cryptographic Failures: Weak Hashing, TLS Configuration & Secrets Management',
      'Chapter 7: Insecure Design & Security Misconfiguration (Default Passwords, Debug Ports)',
      'Chapter 8: Vulnerable and Outdated Components: Software Supply Chain & SBOM',
      'Chapter 9: Server-Side Request Forgery (SSRF): Cloud Metadata Exploits & Whitelisting',
      'Chapter 10: Security Headers (HSTS, CSP, X-Frame-Options) & Building a Defense-in-Depth Pipeline'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: SQL Injection (SQLi) Exploitation & Parameterized Defense',
        summary: 'Examines how unvalidated user input concatenated directly into SQL queries allows attackers to bypass authentication, dump entire database tables, and execute arbitrary commands.',
        keyPoints: [
          'Vulnerable pattern: "SELECT * FROM users WHERE user = \'" + input + "\'" allows an input of "\' OR \'1\'=\'1" to return true for all records.',
          'Parameterized queries (Prepared Statements) treat user input strictly as literal data, never as executable SQL commands, completely neutralizing the attack.',
          'Never rely on client-side regex or front-end input masks for security validation.'
        ],
        codeSnippet: `// ❌ VULNERABLE TO SQL INJECTION:
const query = \`SELECT * FROM users WHERE email = '\${req.body.email}'\`;
db.execute(query); // Attacker can pass: ' OR 1=1 --

// ✅ SECURE IMPLEMENTATION (Parameterized Statement):
const query = 'SELECT id, name, password_hash FROM users WHERE email = ?';
db.execute(query, [req.body.email]); // Safely parameterized by database driver`,
        realWorldUse: 'Essential knowledge for web developers, DevSecOps engineers, security analysts, and ethical penetration testers.'
      }
    ],
    studyNotes: [
      'Always set cookies with the following attributes: HttpOnly (prevents JavaScript access via XSS), Secure (transmits only over HTTPS), and SameSite=Strict (protects against CSRF).',
      'Never store passwords with MD5 or SHA-256; always use slow salted hashing algorithms designed for passwords like bcrypt or Argon2id.'
    ]
  },

  // ==========================================
  // SMARTPHONES & INTERNET
  // ==========================================
  {
    id: 'smartphone-architecture-android-internals',
    title: 'Smartphone Architecture, Android Internals & Hardware Diagnostics',
    subtitle: 'SoC (Snapdragon/MediaTek), Display Tech, Battery Chemistry, Android OS Internals & Diagnostics',
    author: 'Er. Hariom & HK Mobile Engineering Lab',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Smartphones & Internet',
    subcategory: 'Mobile Technology',
    bookType: 'Handbook',
    pages: 280,
    format: 'E-Book + Diagnostic Flowcharts',
    difficulty: 'Intermediate',
    rating: 4.93,
    reviewCount: 380,
    badge: 'Mobile Hardware',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-600 to-indigo-900',
    tags: ['Smartphones', 'Android', 'Hardware', 'Battery', 'SoC', 'Snapdragon', 'Mobile Diagnostics'],
    topics: ['System-on-Chip (SoC) Architecture', 'ARM big.LITTLE & DynamIQ Core Scheduling', 'AMOLED vs IPS LCD Display Panels', 'Lithium-ion Battery Chemistry & Charging Cycles', 'Android OS Layers (Linux Kernel, HAL, ART, Framework)', 'Fastboot, Recovery & Bootloader Unlocking', 'Mobile Sensor Suite (Gyroscope, Accelerometer, ToF)', 'Battery Health Optimization & Thermal Throttling'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Mobile Device Engineering Wing',
    whatYoullLearn: [
      'How modern Smartphone SoCs combine CPU, GPU, NPU, ISP, and 5G modems on a single silicon die',
      'Lithium polymer battery degradation mechanics: why keeping charge between 20% and 80% doubles lifespan',
      'Display refresh rates, LTPO variable refresh technology, PWM dimming, and touch sampling rates',
      'The Android software stack: from Linux kernel and Hardware Abstraction Layer (HAL) to Android Runtime (ART)',
      'Diagnose fast battery drain, ghost touches, thermal throttling, bootloops, and charging port corrosion'
    ],
    tableOfContents: [
      'Chapter 1: The Anatomy of a Modern Smartphone: System-on-Chip (SoC) Integration',
      'Chapter 2: ARM Architecture: Cortex-X, Cortex-A Cores & Heterogeneous Multi-Processing',
      'Chapter 3: Display Engineering: OLED, AMOLED, LTPO Backplanes & PWM Dimming',
      'Chapter 4: Battery Chemistry: Lithium-Ion/Polymer, Fast Charging Protocols (USB-PD) & Longevity',
      'Chapter 5: Camera Hardware & Computational Photography: Sensors, OIS, Periscope Zoom & ISPs',
      'Chapter 6: Android Architecture: Linux Kernel, Hardware Abstraction Layer (HAL) & ART Execution',
      'Chapter 7: Android Partitions: Boot, System, Vendor, Recovery & A/B Seamless Updates',
      'Chapter 8: Smartphone Hardware Diagnostics: Multimeter Testing, Battery Health & Thermal Logs'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Battery Chemistry & Fast Charging Optimization',
        summary: 'Detailed explanation of lithium-ion intercalation between graphite anode and lithium cobalt oxide cathode. Explains why high temperatures (above 40°C) and holding 100% state-of-charge under high voltage degrade battery capacity rapidly.',
        keyPoints: [
          'Battery cycle life: One full cycle = 100% discharge and recharge. Most smartphone batteries provide 500-800 full cycles before dropping below 80% health.',
          'Fast charging (67W-120W) splits the battery into two cells (dual-cell design) charged simultaneously to keep current manageable and reduce thermal stress.',
          'The 20-80 rule: Cycling between 20% and 80% avoids the high-stress electrochemical boundary regions, dramatically slowing SEI layer thickening.'
        ],
        codeSnippet: `Battery Longevity Best Practices:
1. Enable "Protect Battery" / "Optimized Battery Charging" to stop at 80% during overnight charging.
2. Avoid gaming or heavy video recording while fast charging (prevents thermal junction overload).
3. Do not let battery drop to 0% frequently; lithium cells suffer copper shunting under deep discharge.`,
        realWorldUse: 'Essential for smartphone users, mobile app developers, device repair technicians, and hardware reviewers.'
      }
    ],
    studyNotes: [
      'Android Runtime (ART) uses Ahead-of-Time (AOT) and Just-in-Time (JIT) profiling compilation, compiling byte-code into machine code when idle to maintain silky smooth UI frame rates.',
      'Always check battery health via Android bug reports or dedicated diagnostic tools (e.g. Battery Cycle Count * Design Capacity).'
    ]
  }
];
