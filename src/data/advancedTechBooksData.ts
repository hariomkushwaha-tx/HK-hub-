import { EBookItem } from '../types';

export const ADVANCED_TECH_BOOKS_DATA: EBookItem[] = [
  {
    id: 'tech-flutter-dart-mastery',
    title: 'Flutter & Dart: Cross-Platform Mobile Architecture',
    subtitle: 'From Widget Trees & State Management (Bloc / Riverpod) to Native Platform Channels',
    author: 'Hariom Kushwaha & HK VELORA Engineering Cell',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Mobile and systems architect helping students master high-performance application engineering.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'The definitive architectural guide to writing production-ready, 60-120fps cross-platform mobile apps for Android and iOS using Google Flutter and modern Dart 3.',
    shortDescription: 'Master Flutter widget lifecycles, Riverpod/Bloc state management, animation controllers, and offline SQLite caching.',
    category: 'Technology & Computers',
    subcategory: 'Mobile App Development',
    coverGradient: 'from-sky-700 via-blue-900 to-slate-950',
    pages: 390,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 315,
    price: 0,
    isFree: true,
    badge: 'Mobile Pro',
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Mobile App', 'Riverpod', 'Cross-Platform'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Mobile Engineering Division',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Dart 3 Deep Dive: Null Safety, Pattern Matching, Records and Sealed Classes',
      'Flutter Rendering Pipeline: Widget Tree, Element Tree & RenderObject Tree',
      'Declarative Layout: Flex, Stacks, CustomScrollView & Slivers for Butter-smooth Scrolling',
      'State Management Showdown: InheritedWidget, Provider, Riverpod 2.0 and Bloc Pattern',
      'Networking & JSON Serialization: Dio, Retrofit, Freezed and Interceptors',
      'Local Persistence: Hive, Isar, SQFlite & Secure Storage for Offline First Apps',
      'Native Hardware Interop: Platform Channels (MethodChannel, EventChannel) in Kotlin & Swift',
      'Performance Profiling: Flutter DevTools, Rebuild Optimization & App Store Deployment'
    ],
    chaptersPreview: [
      {
        title: 'Flutter Rendering Pipeline: Widget Tree, Element Tree & RenderObject Tree',
        summary: 'Demystifies how Flutter paints pixels to the screen at 120 FPS by decoupling immutable configuration from mutable render objects.',
        keyPoints: [
          'Widgets are lightweight, immutable configuration blueprints rebuilt on every state change.',
          'Elements represent the actual instantiation of a widget at a specific location in the tree, managing lifecycle.',
          'RenderObjects calculate sizing (constraints go down, sizes go up) and handle rasterization onto the Skia/Impeller canvas.',
          'Key to performance: Const constructors prevent unnecessary element recreations and re-layouts.'
        ],
        content: `### Understanding the Three Trees in Flutter

Most Flutter beginners think Flutter paints widgets directly. In reality, Flutter uses three distinct tree structures to achieve native 120fps performance:

\`\`\`
Widget Tree (Immutable Blueprints)
      ↓ creates
Element Tree (Mutable Lifecycle & State Holder)
      ↓ creates/updates
RenderObject Tree (Geometry, Constraints, Sizing & Painting)
\`\`\`

#### 1. The Rule of Constraints
In Flutter's layout protocol:
> **Constraints go down. Sizes go up. Parent sets position.**

The parent gives minimum and maximum width/height constraints to each child. The child chooses its own size within those constraints, reports it back, and the parent decides where to position the child on screen.

#### 2. Why const Constructors Matter
When you declare a widget with \`const\`:
\`\`\`dart
const Text('Welcome to HK VELORA');
\`\`\`
Flutter caches the widget instance in memory at compile-time. During a widget rebuild, the framework checks pointer equality (\`identical(oldWidget, newWidget)\`). Because the reference hasn't changed, the entire sub-tree is skipped from re-evaluation!`,
        codeSnippet: `import 'package:flutter/material.dart';

class HKVeloraCard extends StatelessWidget {
  final String title;
  const HKVeloraCard({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.indigo.shade900,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Text(
        title,
        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
      ),
    );
  }
}`,
        realWorldUse: 'Prevents frame drops and jank in complex e-commerce, banking, and social feeds with large dynamic lists.',
        exercise: 'Implement a custom SliverAppBar with an expandable header and verify frame rates in Flutter DevTools.'
      }
    ],
    studyNotes: [
      'Always use RepaintBoundary widgets around frequently animating widgets to prevent surrounding static widgets from repainting.',
      'Prefer Riverpod or Bloc for enterprise applications requiring testability and strict separation of UI and business logic.'
    ]
  },
  {
    id: 'tech-kotlin-android-modern',
    title: 'Modern Android with Kotlin & Jetpack Compose',
    subtitle: 'Declarative UI, State Hoisting, Kotlin Coroutines, Flow, Room DB & Clean Architecture',
    author: 'Hariom Kushwaha & Android Frameworks Desk',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Android developer and architect advocate for modern declarative development.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'A complete handbook on 100% modern Android engineering, leaving XML layouts behind to master Jetpack Compose, unidirectional data flow, Hilt dependency injection, and MVVM.',
    shortDescription: 'Jetpack Compose declarative UI, Coroutines & Flow, Room SQLite, Hilt DI, and Clean Architecture.',
    category: 'Technology & Computers',
    subcategory: 'Mobile App Development',
    coverGradient: 'from-emerald-800 via-teal-950 to-slate-950',
    pages: 370,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 290,
    price: 0,
    isFree: true,
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Coroutines', 'Room DB', 'Clean Architecture'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Android Engineering Desk',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Modern Kotlin Fundamentals: Extension Functions, Sealed Interfaces & Coroutines',
      'Jetpack Compose Paradigms: Recomposition, State Hoisting & RememberSaveable',
      'Compose Layouts: Rows, Columns, Box, LazyColumn & Custom Modifiers',
      'Unidirectional Data Flow (UDF) & ViewModel Architecture',
      'Asynchronous Programming with Kotlin Coroutines & Cold/Hot Flows (StateFlow, SharedFlow)',
      'Dependency Injection with Dagger Hilt: Modules, Scopes, and Component Trees',
      'Room Persistence Library: Entities, DAOs, TypeConverters & Flow Reactivity',
      'Testing & Publishing: Compose UI Tests, MockK, Android Vitals & Google Play Release'
    ],
    chaptersPreview: [
      {
        title: 'Jetpack Compose State Hoisting & Recomposition Optimization',
        summary: 'Learn how Compose recomposes only the functions whose input state changed, and how to design stateless composables with hoisted events.',
        keyPoints: [
          'State hoisting pattern: Moving state up to a component caller to make composables stateless, reusable, and testable.',
          'Recomposition is optimistic: Compose can cancel recomposition if state changes again before finishing.',
          'Use remember to retain state across recompositions and rememberSaveable to retain across configuration changes (e.g. screen rotation).',
          'Stable types: Compose skips recomposing a function if all arguments are primitive or marked @Immutable / @Stable.'
        ],
        content: `### Unidirectional Data Flow in Jetpack Compose

In traditional Android Views, you mutated UI elements directly (\`textView.setText("New")\`). In Jetpack Compose, UI is an immutable projection of state:

\`\`\`
State flows DOWN (ViewModel -> Screen -> Composable)
Events flow UP (User clicks -> Composable -> ViewModel)
\`\`\`

#### Stateless vs Stateful Composables
A stateless composable receives data as parameters and emits callbacks for user interactions:

\`\`\`kotlin
@Composable
fun StudentCounter(
    count: Int,
    onIncrement: () -> Unit,
    modifier: Modifier = Modifier
) {
    Button(
        onClick = onIncrement,
        modifier = modifier
    ) {
        Text("Read chapters: $count")
    }
}
\`\`\`

By hoisting \`count\` and \`onIncrement\`, \`StudentCounter\` can be tested in isolation, rendered in previews, and shared across different screens without coupling to any specific database or ViewModel!`,
        codeSnippet: `// Example ViewModel using StateFlow
class BookViewModel : ViewModel() {
    private val _readingCount = MutableStateFlow(0)
    val readingCount: StateFlow<Int> = _readingCount.asStateFlow()

    fun incrementRead() {
        _readingCount.value += 1
    }
}`,
        realWorldUse: 'Used across top global Android apps (Google Pay, Twitter/X, Spotify) for clean, crash-free mobile architectures.',
        exercise: 'Create a Compose screen with a search bar and a filtered LazyColumn list, ensuring only modified list items recompose.'
      }
    ],
    studyNotes: [
      'Avoid performing heavy calculations directly inside Composable functions without wrapping them in remember(key) { ... }.',
      'Always collect StateFlow in Compose using collectAsStateWithLifecycle() to ensure flows pause when the app is in the background.'
    ]
  },
  {
    id: 'tech-kubernetes-devops-cloud',
    title: 'Production Kubernetes, Docker & CI/CD Pipelines',
    subtitle: 'Container Orchestration, Helm Charts, Ingress Controllers, Service Meshes & GitOps',
    author: 'Arunav Roy & HK VELORA DevOps Division',
    authorBio: 'Cloud infrastructure architect and Linux Foundation certified Kubernetes administrator (CKA) at HK VELORA.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'Master enterprise-grade DevOps practices: deploying zero-downtime microservices on Kubernetes, configuring Ingress, managing secrets, and automating deployments with GitHub Actions and ArgoCD.',
    shortDescription: 'Pods, Deployments, Services, ConfigMaps, Ingress, Helm, ArgoCD GitOps, and Prometheus monitoring.',
    category: 'Technology & Computers',
    subcategory: 'DevOps & Cloud',
    coverGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    pages: 420,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 340,
    price: 0,
    isFree: true,
    badge: 'DevOps Standard',
    tags: ['Kubernetes', 'Docker', 'DevOps', 'CI/CD', 'Helm', 'Cloud Native', 'GitOps'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Cloud Native Infrastructure Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Docker Internals: Linux Namespaces, Cgroups, Layer Caching & Multi-Stage Builds',
      'Kubernetes Architecture: Control Plane (API Server, etcd, Kube-Scheduler) & Worker Nodes (Kubelet, Kube-Proxy)',
      'Core Workloads: Pods, ReplicaSets, Deployments, StatefulSets & DaemonSets',
      'Networking & Services: ClusterIP, NodePort, LoadBalancer & Ingress Controllers (NGINX/Traefik)',
      'Configuration & Secrets Management: ConfigMaps, Sealed Secrets & External Secrets Operator',
      'Storage in K8s: PersistentVolumes (PV), PersistentVolumeClaims (PVC) & StorageClasses',
      'Packaging with Helm: Writing production-ready Helm Charts and Values templates',
      'GitOps & Observability: ArgoCD continuous delivery, Prometheus metrics & Grafana dashboards'
    ],
    chaptersPreview: [
      {
        title: 'Kubernetes Workloads: Rolling Updates & Zero Downtime Deployments',
        summary: 'Examines the mechanics of Deployment controllers, readiness and liveness probes, and rolling update strategies with maxSurge and maxUnavailable.',
        keyPoints: [
          'A Deployment manages a ReplicaSet, which in turn ensures the declared number of identical Pods are running.',
          'Liveness probes check if a container is alive and restart it if it becomes unresponsive or deadlocked.',
          'Readiness probes determine when a pod is ready to receive network traffic from a Service.',
          'Rolling updates: maxSurge controls how many extra pods can be provisioned during deployment; maxUnavailable controls how many can be taken offline.'
        ],
        content: `### Zero-Downtime Deployments with Probes

In production systems, updating an application must never drop active HTTP requests. Kubernetes achieves this through coordinated deployment strategies and health probes:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hkvelora-api-deployment
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: api
        image: hkvelora/api:v2.1
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
\`\`\`

#### Why Readiness Probes are Critical:
When a new pod starts, it takes time to connect to databases and warm caches. If traffic is routed before it is fully ready, users will see \`502 Bad Gateway\` errors. A readiness probe tells Kubernetes: *do NOT add this pod to the Service endpoints until it responds with HTTP 200.*`,
        realWorldUse: 'Prevents downtime during production releases at high-scale tech firms like Google, Netflix, and Amazon.',
        exercise: 'Write a Kubernetes Service and Ingress manifest routing traffic with SSL termination to a 3-replica web deployment.'
      }
    ],
    studyNotes: [
      'Never store database state inside simple Deployments; use StatefulSets with persistent volume claim templates.',
      'Always specify CPU and Memory requests and limits to prevent the Kubernetes Out-Of-Memory (OOM) killer from terminating critical pods.'
    ]
  },
  {
    id: 'tech-golang-microservices',
    title: 'Building High-Performance Microservices in Go',
    subtitle: 'Goroutines, Channels, gRPC, Protobuf, Clean Architecture & Distributed Systems',
    author: 'Er. Kunal Sengupta & HK VELORA Backend Division',
    authorBio: 'Distributed systems engineer and Go maintainer, designing low-latency payment backends.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'Learn to design microservices that handle hundreds of thousands of concurrent requests per second with negligible memory footprints using Go (Golang) and gRPC.',
    shortDescription: 'Go concurrency, Channels, Mutexes, gRPC Protobuf, Gin/Fiber REST, and distributed tracing.',
    category: 'Coding & Programming',
    subcategory: 'Backend Engineering',
    coverGradient: 'from-cyan-800 via-sky-950 to-slate-950',
    pages: 350,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 275,
    price: 0,
    isFree: true,
    tags: ['Go', 'Golang', 'Microservices', 'gRPC', 'Concurrency', 'Backend', 'Distributed Systems'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Systems Programming Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Go Idiomatic Foundations: Structs, Interfaces, Error Handling & Slices',
      'The Go Runtime: The M:N GMP Scheduler, Stack Allocation & Garbage Collector',
      'Concurrency Patterns: Goroutines, Buffered vs Unbuffered Channels, and Select Statement',
      'Synchronization: sync.Mutex, sync.RWMutex, sync.WaitGroup and atomic primitives',
      'Building REST APIs: Routing with Gin/Chi, Middleware, and Structured Logging',
      'High-Performance RPCs: Protocol Buffers (proto3) and gRPC Unary & Streaming services',
      'Database Operations: sqlx, pgx connection pooling, transactions & migration strategies',
      'Distributed Systems Engineering: Rate limiting, Circuit Breakers (hystrix) & OpenTelemetry tracing'
    ],
    chaptersPreview: [
      {
        title: 'Concurrency in Go: Goroutines, Channels and the GMP Scheduler',
        summary: 'Explore why Go can run millions of goroutines on a standard machine where Java or C++ threads would exhaust RAM.',
        keyPoints: [
          'OS threads have a fixed stack size (typically 1-2 MB); Goroutines start with only 2 KB stack that grows dynamically.',
          'The GMP model: G (Goroutine), M (OS Machine thread), P (Processor context holding the run queue).',
          'Channels provide CSP (Communicating Sequential Processes) style synchronization without explicit locking.',
          'Always close channels from the sender side, never from the receiver.'
        ],
        content: `### Why Go Concurrency Outperforms OS Threads

In traditional programming languages (C++, Python, Java), every thread maps 1:1 to an operating system kernel thread. Context switching between kernel threads requires saving registers and switching address spaces in CPU kernel mode, incurring high latency.

Go implements an **M:N cooperative user-space scheduler** known as the **GMP Model**:
- **G (Goroutines):** The lightweight unit of execution.
- **M (Machine):** An actual OS thread managed by the kernel.
- **P (Processor):** A logical processor resource holding the local queue of runnable Goroutines.

\`\`\`go
package main

import (
	"fmt"
	"sync"
	"time"
)

func fetchChapter(id int, wg *sync.WaitGroup, ch chan<- string) {
	defer wg.Done()
	time.Sleep(100 * time.Millisecond) // Simulated network call
	ch <- fmt.Sprintf("Chapter %d loaded successfully", id)
}

func main() {
	var wg sync.WaitGroup
	ch := make(chan string, 5)

	for i := 1; i <= 5; i++ {
		wg.Add(1)
		go fetchChapter(i, &wg, ch)
	}

	wg.Wait()
	close(ch)

	for msg := range ch {
		fmt.Println(msg)
	}
}
\`\`\``,
        realWorldUse: 'Powers high-traffic backends at Uber, Cloudflare, Twitch, and Google.',
        exercise: 'Implement a worker pool in Go that processes incoming HTTP requests using a fixed number of worker goroutines.'
      }
    ],
    studyNotes: [
      'Do not communicate by sharing memory; instead, share memory by communicating (Go Proverbs).',
      'Always pass context.Context as the first argument in backend functions to handle cancellation and deadlines.'
    ]
  },
  {
    id: 'tech-rust-systems-programming',
    title: 'Rust: Memory Safety, Concurrency & Systems Programming',
    subtitle: 'Ownership, Borrowing, Lifetimes, Smart Pointers, Async/Await with Tokio & Cargo Internals',
    author: 'Abhinav Tyagi & HK VELORA Systems Group',
    authorBio: 'Compiler engineer, Linux kernel Rust contributor, and systems architecture lecturer at HK VELORA.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'Master Rust’s revolutionary ownership and borrowing model to build blazingly fast, crash-free, and thread-safe software with zero-cost abstractions.',
    shortDescription: 'Ownership, Borrow Checker, Lifetimes, Traits, Tokio async, and Safe vs Unsafe Rust.',
    category: 'Coding & Programming',
    subcategory: 'Systems Programming',
    coverGradient: 'from-amber-800 via-orange-950 to-slate-950',
    pages: 410,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 380,
    price: 0,
    isFree: true,
    badge: 'Elite Systems',
    tags: ['Rust', 'Systems Programming', 'Memory Safety', 'Tokio', 'Concurrency', 'Compiler'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Low-Level Systems Department',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Why Rust: Eliminating Null Pointers, Use-After-Free, and Data Races at Compile Time',
      'The Ownership Model: Move Semantics, Stack vs Heap, and the Drop Trait',
      'Borrowing & References: The Golden Rule of One Mutable Reference OR Many Immutable References',
      'Lifetimes: Annotating References, Lifetime Elision Rules, and Static Lifetimes',
      'Enums & Pattern Matching: Option<T>, Result<T, E> and the Question Mark Operator',
      'Traits & Generics: Defining Shared Behavior, Trait Bounds, and Monomorphization',
      'Smart Pointers: Box<T>, Rc<T>, Arc<T>, RefCell<T> and Interior Mutability',
      'Asynchronous Rust: Futures, the Tokio Runtime, and High-Throughput Network Servers'
    ],
    chaptersPreview: [
      {
        title: 'The Ownership Model: Move Semantics and Memory Safety Without Garbage Collection',
        summary: 'How Rust manages memory through strict compile-time rules, eliminating the runtime overhead of garbage collectors and manual free() bugs.',
        keyPoints: [
          'Each value in Rust has an owner (a variable).',
          'There can only be one owner at a time.',
          'When the owner goes out of scope, Rust automatically drops the value and frees heap memory immediately.',
          'Assigning a heap-allocated variable to another variable moves ownership, invalidating the original.'
        ],
        content: `### The Core Innovation of Rust: Ownership

In C and C++, manual memory management (\`malloc\` / \`free\`) leads to severe vulnerabilities: double-free, use-after-free, and memory leaks. In languages like Java, Python, and JavaScript, a runtime Garbage Collector periodically pauses the program to sweep unused memory.

Rust invents a third way: **Compile-Time Memory Safety via Ownership**.

\`\`\`rust
fn main() {
    let s1 = String::from("HK VELORA Systems");
    let s2 = s1; // Ownership moves to s2!

    // println!("{}", s1); // COMPILE ERROR: value borrowed here after move
    println!("{}", s2);   // VALID: s2 is the sole owner
} // Here, s2 goes out of scope and memory is instantly freed!
\`\`\`

#### The Borrowing Rules:
1. You may have any number of immutable references (\`&T\`) to a resource.
2. OR you may have exactly one mutable reference (\`&mut T\`).
3. You can NEVER have both at the same time.

This simple rule mathematically guarantees the complete absence of **data races** across multiple concurrent threads!`,
        realWorldUse: 'Used in Linux Kernel development, WebAssembly runtimes, Discord voice infrastructure, and AWS Firecracker microVMs.',
        exercise: 'Write a custom Rust function that takes an immutable string slice and returns the length of the first word using proper lifetime annotations.'
      }
    ],
    studyNotes: [
      'Monomorphization: Rust generics generate specialized assembly for each concrete type used, resulting in zero runtime performance penalty.',
      'Remember: unwrap() will panic on None or Err; in production always use pattern matching, unwrap_or_default(), or the ? operator.'
    ]
  },
  {
    id: 'tech-pytorch-deep-learning',
    title: 'Deep Learning & Neural Networks with PyTorch',
    subtitle: 'Tensors, Autograd, Convolutional Networks (CNNs), Transformers & Model Optimization',
    author: 'Dr. Tanmoy Banerjee & HK VELORA AI Group',
    authorBio: 'Artificial Intelligence researcher, computer vision engineer, and author of practical PyTorch curriculum at HK VELORA.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'Build, train, and deploy deep neural networks using PyTorch 2.x, mastering gradient descent, custom datasets, transfer learning, and attention mechanisms.',
    shortDescription: 'Tensors, Automatic Differentiation (Autograd), CNNs, ResNet, Transformer Attention, and CUDA GPU acceleration.',
    category: 'Artificial Intelligence',
    subcategory: 'Deep Learning',
    coverGradient: 'from-red-900 via-amber-950 to-slate-950',
    pages: 380,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 310,
    price: 0,
    isFree: true,
    tags: ['PyTorch', 'Deep Learning', 'Neural Networks', 'AI', 'Tensors', 'Machine Learning', 'CUDA'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Machine Intelligence Department',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'PyTorch Tensor Operations: GPU Acceleration, Broadcasting, Reshaping & Device Management',
      'The Autograd Engine: Computational Graphs, Forward Passes & Backward Propagation',
      'Building Multi-Layer Perceptrons (MLPs): torch.nn.Module, Loss Functions & Optimizers',
      'Computer Vision with CNNs: Convolutions, Pooling, Batch Normalization & Residual Networks',
      'Data Engineering: torch.utils.data.Dataset, DataLoader, Augmentations & Batching',
      'Transfer Learning: Fine-tuning pre-trained Vision Transformers (ViT) and ResNet50',
      'Sequence Modeling: RNNs, LSTMs and the Self-Attention Mechanism (Q, K, V Matrices)',
      'Model Optimization: PyTorch 2.0 torch.compile, Quantization, ONNX Export & TorchScript'
    ],
    chaptersPreview: [
      {
        title: 'The Autograd Engine: Dynamic Computational Graphs and Backpropagation',
        summary: 'Understand how PyTorch constructs dynamic Directed Acyclic Graphs (DAGs) on the fly to automatically compute gradients for complex loss functions.',
        keyPoints: [
          'PyTorch creates dynamic computational graphs (define-by-run), allowing arbitrary Python control flow inside models.',
          'Setting requires_grad=True tracks operations performed on a tensor.',
          'loss.backward() traverses the graph in reverse, applying the multivariable calculus chain rule to populate .grad attributes.',
          'optimizer.step() updates weights based on gradients; optimizer.zero_grad() clears accumulated gradients before the next iteration.'
        ],
        content: `### The Anatomy of a Training Loop in PyTorch

Every deep learning model in PyTorch follows a rigorous 5-step training cycle inside the training epoch:

\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim

# 1. Model Definition
class SimpleMLP(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_dim, 64),
            nn.ReLU(),
            nn.Linear(64, output_dim)
        )

    def forward(self, x):
        return self.network(x)

model = SimpleMLP(input_dim=10, output_dim=2).cuda()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3)

# 2. Standard Training Iteration
for batch_x, batch_y in dataloader:
    batch_x, batch_y = batch_x.cuda(), batch_y.cuda()
    
    # Step 1: Forward pass
    predictions = model(batch_x)
    
    # Step 2: Compute loss
    loss = criterion(predictions, batch_y)
    
    # Step 3: Zero previous gradients
    optimizer.zero_grad()
    
    # Step 4: Backpropagation (Autograd computes dLoss/dWeight)
    loss.backward()
    
    # Step 5: Optimizer step (Weight update via gradient descent)
    optimizer.step()
\`\`\`

#### Why optimizer.zero_grad() is Mandatory:
In PyTorch, gradients **accumulate** by default rather than overwrite. If you omit \`optimizer.zero_grad()\`, gradients from previous batches add up, destabilizing gradient descent.`,
        realWorldUse: 'Used by OpenAI, Meta, Tesla Autopilot, and researchers worldwide for foundational AI model creation.',
        exercise: 'Implement a binary classification model for tabular student data, plotting training loss versus validation loss across 20 epochs.'
      }
    ],
    studyNotes: [
      'Always call model.eval() and with torch.no_grad(): during validation and inference to disable dropout and stop storing gradients in memory.',
      'Use torch.cuda.is_available() checks to make scripts portable across CPU laptops and GPU cloud clusters.'
    ]
  },
  {
    id: 'tech-llm-generative-ai-eng',
    title: 'Generative AI & LLM Engineering: LangChain, RAG & Agents',
    subtitle: 'Retrieval Augmented Generation (RAG), Vector Databases, Function Calling & Multi-Agent Workflows',
    author: 'Hariom Kushwaha & AI Engineering Team',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Leading generative AI and software systems engineering.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'A comprehensive textbook for developers building real-world enterprise AI applications using Large Language Models, embeddings, Chroma/Pinecone vector retrieval, and autonomous agents.',
    shortDescription: 'RAG architecture, Vector Embeddings, Chunking strategies, Semantic Search, Tool Calling, and Evaluation.',
    category: 'Artificial Intelligence',
    subcategory: 'Generative AI',
    coverGradient: 'from-purple-900 via-indigo-950 to-slate-950',
    pages: 360,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 350,
    price: 0,
    isFree: true,
    badge: 'Trending 2026',
    tags: ['Generative AI', 'LLM', 'RAG', 'Vector Database', 'Embeddings', 'LangChain', 'Agents'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Applied AI Laboratory',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'How LLMs Work: Next-Token Prediction, Context Windows, Temperature and Top-P Sampling',
      'Vector Embeddings: High-Dimensional Semantic Geometry and Cosine Similarity Metrics',
      'Document Chunking Strategies: Recursive Character Splitting, Semantic Chunking & Metadata Enrichment',
      'Vector Stores: Pinecone, Qdrant, ChromaDB, and HNSW (Hierarchical Navigable Small World) Indexing',
      'The RAG Pipeline: Query Expansion, Hybrid Search (Dense + Sparse BM25) and Re-ranking',
      'Tool Calling & Function Calling: Structuring JSON Schemas for Real-World API Execution',
      'Building Autonomous Agents: ReAct (Reason + Act) Loop, Memory Management and Planning',
      'Evaluation & Guardrails: Ragas framework, Hallucination detection, and PII protection'
    ],
    chaptersPreview: [
      {
        title: 'Retrieval Augmented Generation (RAG): Architecting the Complete Pipeline',
        summary: 'Solve the problem of LLM hallucinations and static knowledge cutoffs by grounding generation with dynamic vector database retrieval.',
        keyPoints: [
          'LLMs suffer from hallucinations and knowledge cutoffs; RAG injects verified enterprise documents directly into the prompt context.',
          'Cosine similarity measures the cosine of the angle between two embedding vectors in multidimensional space.',
          'Chunk overlap (e.g. 500 characters with 100 character overlap) ensures semantic context is not severed across boundaries.',
          'Re-ranking models (like Cohere Rerank) dramatically boost answer precision by evaluating context relevance after initial vector search.'
        ],
        content: `### The Multi-Stage Architecture of Enterprise RAG

Simple prompt engineering fails when an application needs to answer queries based on thousands of proprietary documents. RAG divides the problem into two distinct phases:

\`\`\`
Indexing Phase (Offline):
Raw Documents -> Text Chunker -> Embedding Model -> Vector Database (e.g. Chroma/Pinecone)

Inference Phase (Real-Time):
User Query -> Query Embedding -> Vector Similarity Search (Top-K Chunks)
           -> Re-Ranker -> Augmented Prompt (Context + Question) -> LLM -> Grounded Response
\`\`\`

#### 1. Document Chunking Best Practices:
Never dump an entire 100-page PDF as a single vector. Use recursive splitting that honors markdown headers, paragraphs, and sentence boundaries:
- **Chunk Size:** 400 - 800 tokens (ideal balance of specificity and surrounding context).
- **Chunk Overlap:** 10% - 15% (prevents losing definitions that straddle two chunks).

#### 2. Guarding against Hallucinations
Always provide a strict system prompt constraint:
> *"You are a precise technical tutor. Answer ONLY based on the provided context. If the answer cannot be found in the context, respond honestly: 'I do not have sufficient information in the provided documentation to answer this question.'"*`,
        realWorldUse: 'Powers modern enterprise search, customer support copilots, and medical/legal document question-answering systems.',
        exercise: 'Build an end-to-end RAG script in Python that indexes a 5-page PDF using sentence-transformers and answers questions with citation sources.'
      }
    ],
    studyNotes: [
      'Always separate System Prompts (instructions) from User Prompts (dynamic inputs) to prevent Prompt Injection attacks.',
      'Hybrid Search (combining lexical BM25 keyword match with semantic dense vectors) consistently outperforms dense vector search alone for product codes and proper nouns.'
    ]
  },
  {
    id: 'tech-postgresql-database-internals',
    title: 'PostgreSQL Mastery: Indexing, Query Optimization & Internals',
    subtitle: 'B-Trees, GIN Indexes, MVCC, WAL Logging, EXPLAIN ANALYZE & High Availability',
    author: 'Vikram Joshi & HK VELORA Data Architecture Cell',
    authorBio: 'Principal database administrator and performance architect specializing in high-throughput relational systems.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'A deep internal exploration of PostgreSQL. Learn how queries execute, master indexing strategies, diagnose slow queries with EXPLAIN ANALYZE, and tune connection pools.',
    shortDescription: 'MVCC, B-Tree and GIN indexes, EXPLAIN ANALYZE query plans, vacuuming, and replication.',
    category: 'Technology & Computers',
    subcategory: 'Databases',
    coverGradient: 'from-blue-950 via-slate-900 to-slate-950',
    pages: 340,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 220,
    price: 0,
    isFree: true,
    tags: ['PostgreSQL', 'SQL', 'Databases', 'Indexing', 'Query Optimization', 'MVCC'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Database Engineering Division',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'PostgreSQL Process Architecture: Postmaster, Background Workers & Shared Memory Buffer Cache',
      'Multi-Version Concurrency Control (MVCC): Tuple headers (xmin, xmax) & Non-blocking Reads',
      'Write-Ahead Logging (WAL): Durability, Checkpoints, and Point-in-Time Recovery (PITR)',
      'Storage Engines & Pages: 8KB Page Anatomy, Heap Tuples, and TOAST for Large Fields',
      'Index Types: B-Tree for Comparisons, GIN for Full-Text/JSONB, GiST for Geospatial & BRIN for Big Data',
      'Decoding EXPLAIN (ANALYZE, BUFFERS): Sequential Scans, Index Scans, Bitmap Heap Scans & Nested Loops',
      'VACUUM & Autovacuum: Dead Tuples, Bloat Elimination and Transaction ID Wraparound',
      'High Availability: Streaming Physical Replication, Logical Replication & PgBouncer Connection Pooling'
    ],
    chaptersPreview: [
      {
        title: 'Decoding EXPLAIN ANALYZE: Reading and Optimizing Query Execution Plans',
        summary: 'Learn to diagnose slow queries by understanding how the PostgreSQL cost-based query optimizer plans scans, joins, and memory allocations.',
        keyPoints: [
          'EXPLAIN shows the cost estimates; EXPLAIN ANALYZE actually executes the query and reports real runtime in milliseconds.',
          'Sequential Scan (Seq Scan): Scans every page in the table sequentially; acceptable for small tables or when retrieving majority of rows.',
          'Index Scan vs Bitmap Index Scan: Index scan visits index and heap tuple by tuple; Bitmap scan compiles a bitmask of matching pages first.',
          'Always check "Rows Removed by Filter" - a high number indicates an index is missing or cannot be used by the planner.'
        ],
        content: `### How to Read a PostgreSQL Query Plan

When a SQL query takes seconds instead of milliseconds, running \`EXPLAIN (ANALYZE, BUFFERS)\` is your primary diagnostic tool:

\`\`\`sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title, author 
FROM books 
WHERE category = 'Technology & Computers' 
ORDER BY published_date DESC 
LIMIT 20;
\`\`\`

#### Critical Plan Nodes to Spot:
1. **Seq Scan (Sequential Scan):** If you see this on a table with 1,000,000+ rows, PostgreSQL is reading every single 8KB disk page from start to finish.
2. **Sort Method (external sort / Disk):** If \`work_mem\` is too small, PostgreSQL writes intermediate sort results to disk temporary files. Increasing \`work_mem\` allows sorting in fast RAM.
3. **Index Scan with Filter:** If you have an index on \`category\` but not on \`published_date\`, Postgres may do an index scan followed by an expensive manual sort.

#### The Power of Composite Indexes:
\`\`\`sql
-- Single multi-column index covers both filtering AND sorting:
CREATE INDEX idx_books_cat_date ON books (category, published_date DESC);
\`\`\`
With this index, PostgreSQL performs an **Index Scan**, reading precisely 20 rows in chronological order with zero disk sorting!`,
        realWorldUse: 'Standard practice for backend engineers ensuring microservices respond in under 50ms at scale.',
        exercise: 'Explain why a B-Tree index on a timestamp column cannot be used if you write WHERE date_trunc("day", created_at) = CURRENT_DATE.'
      }
    ],
    studyNotes: [
      'Never index boolean columns with 50/50 distribution with standard B-Tree; use Partial Indexes: CREATE INDEX ... WHERE is_active = true;',
      'Use GIN (Generalized Inverted Index) for indexing JSONB columns or arrays with the containment operator (@>).'
    ]
  },
  {
    id: 'tech-cyber-threat-hunting',
    title: 'Cyber Threat Hunting & Defensive SOC Operations',
    subtitle: 'MITRE ATT&CK Framework, SIEM Analytics, Memory Forensics & Incident Response',
    author: 'Samarth Kulkarni & HK VELORA Cybersecurity Wing',
    authorBio: 'Principal security operations consultant, certified ethical hacker (CEH/CISSP), and cybersecurity trainer at HK VELORA.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'Move from passive security alerting to proactive adversary hunting across enterprise networks using MITRE ATT&CK tactics, Windows event logs, and forensic analysis.',
    shortDescription: 'MITRE ATT&CK, SIEM rule design, Sysmon telemetry, Memory Forensics with Volatility, and Incident Response.',
    category: 'Cybersecurity & Digital Safety',
    subcategory: 'Defensive Security',
    coverGradient: 'from-slate-900 via-zinc-950 to-neutral-950',
    pages: 350,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 260,
    price: 0,
    isFree: true,
    tags: ['Cybersecurity', 'SOC', 'Threat Hunting', 'MITRE ATT&CK', 'SIEM', 'Forensics', 'Incident Response'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Cyber Defense Laboratory',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'The Threat Hunting Paradigm: Hypothesis-Driven Hunting vs Reactive Alert Triage',
      'The MITRE ATT&CK Matrix: Initial Access, Persistence, Privilege Escalation & Lateral Movement',
      'Endpoint Telemetry: Windows Event IDs (4624, 4688, 7045) & Sysmon Configuration',
      'Network Forensics: Zeek/Suricata Logs, Beaconing Detection, DNS Tunneling & JA3 Fingerprinting',
      'Memory Analysis: Inspecting Volatile RAM with Volatility 3 (pslist, malfind, netscan)',
      'Active Directory Attacks & Defense: Kerberoasting, AS-REP Roasting & Pass-the-Hash',
      'SIEM Engineering: Writing Detection Rules in Sigma, YARA & KQL (Kusto Query Language)',
      'The NIST Incident Response Lifecycle: Preparation, Detection, Containment, Eradication & Lessons Learned'
    ],
    chaptersPreview: [
      {
        title: 'The MITRE ATT&CK Framework: Mapping Adversary Techniques',
        summary: 'Deconstruct how modern advanced persistent threats (APTs) compromise networks, and how defenders map detection coverage against ATT&CK matrices.',
        keyPoints: [
          'MITRE ATT&CK categorizes real-world adversary behavior into 14 distinct tactical objectives.',
          'Techniques describe how an attacker accomplishes a tactic (e.g. Tactic: Credential Access, Technique: T1003 OS Credential Dumping).',
          'Pyramid of Pain: Hash values and IP addresses are trivial for attackers to change; attacking their Tools and TTPs (Tactics, Techniques & Procedures) inflicts maximum cost on adversaries.',
          'Sysmon Event ID 1 (Process Creation) with Command Line logging is the single most valuable forensic log on Windows endpoints.'
        ],
        content: `### Moving Beyond Signatures: The Pyramid of Pain

Traditional antivirus tools rely on MD5/SHA256 file hashes. Adversaries bypass this trivially by changing a single byte in a compiled binary.

David Bianco’s **Pyramid of Pain** shows the value of different threat hunting indicators:
1. **Hash Values (Trivial):** Easy for attackers to alter.
2. **IP Addresses (Easy):** Fast flux DNS, VPNs, and proxies render IP blocking ephemeral.
3. **Domain Names (Simple):** Domain Generation Algorithms (DGAs) generate thousands of disposable domains daily.
4. **Network / Host Artifacts (Annoying):** User-Agent strings, registry keys, mutexes.
5. **Tools (Challenging):** Mimikatz, Cobalt Strike, BloodHound.
6. **TTPs - Tactics, Techniques & Procedures (Tough):** How the attacker actually operates (e.g. using PowerShell to dump LSASS memory).

When you build hunting queries around **TTPs**, your detection remains effective even if the attacker invents a brand new payload!`,
        realWorldUse: 'Essential curriculum for Security Operations Center (SOC) analysts, penetration testers, and enterprise security architects.',
        exercise: 'Write a Sigma rule detecting suspicious PowerShell executions using the -enc (encoded command) parameter.'
      }
    ],
    studyNotes: [
      'Windows Event ID 4624 (Successful Logon): Look closely at Logon Type 3 (Network logon) and Logon Type 10 (Remote Interactive / RDP).',
      'Always isolate compromised hosts at the network layer before attempting forensic memory acquisition to prevent lateral movement.'
    ]
  },
  {
    id: 'tech-nextjs-fullstack-architecture',
    title: 'Next.js 15 & React 19 Full-Stack Web Architecture',
    subtitle: 'Server Components (RSC), Server Actions, Turbopack, App Router & Edge Caching',
    author: 'Hariom Kushwaha & Web Engineering Desk',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Full-stack React & TypeScript architect.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'Master the bleeding-edge paradigm shift of modern React and Next.js: React Server Components, zero-bundle streaming, optimistic UI updates with Server Actions, and edge deployment.',
    shortDescription: 'App Router, React Server Components (RSC), Server Actions, Parallel & Intercepting Routes, and Turbopack.',
    category: 'Technology & Computers',
    subcategory: 'Web Development',
    coverGradient: 'from-slate-900 via-zinc-950 to-neutral-950',
    pages: 370,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 380,
    price: 0,
    isFree: true,
    badge: 'Next.js 15',
    tags: ['Next.js', 'React', 'TypeScript', 'Server Components', 'Full Stack', 'Web Development'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Modern Web Frameworks Lab',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'The Evolution of React: From Client-Side SPAs to Server-Driven Streaming Architectures',
      'React Server Components (RSC): Mental Model, Bundle Size Elimination & Async Component Rendering',
      'The App Router Layout Hierarchy: RootLayout, Nested Layouts, Templates, and Route Groups',
      'Data Fetching & Caching: fetch() extensions, Request Memoization, Data Cache and revalidatePath()',
      'Server Actions: Mutations without API Routes, Progressive Enhancement & useActionState hook',
      'Streaming & Suspense: Instant Loading UI (loading.tsx), Streaming SSR & Partial Prerendering (PPR)',
      'Advanced Routing: Parallel Routes (@slots), Intercepting Routes ((..)), and Catch-all Segments',
      'Production Deployment: Edge Runtime vs Node.js, OpenTelemetry, Middleware & Security Hardening'
    ],
    chaptersPreview: [
      {
        title: 'React Server Components (RSC): Eliminating Client Bundles',
        summary: 'Understand how React Server Components execute exclusively on the server, streaming lightweight virtual DOM JSON rather than JavaScript bundles to the browser.',
        keyPoints: [
          'Server Components run exclusively on the server, never download JavaScript to the client browser, and have direct access to backend databases.',
          'Client Components (\'use client\') are required only when needing browser APIs, state (useState), or event listeners (onClick).',
          'Interleaving: Server components can pass other Server Components as children/props into Client Components without turning them into client bundles.',
          'Zero-bundle-size dependencies: Heavy libraries like markdown parsers or date formatters remain 100% server-side.'
        ],
        content: `### The Server Component Mental Model

In traditional React, every component you wrote was shipped inside a giant \`bundle.js\` to the client browser. With React Server Components in Next.js App Router, components are **Server Components by default**:

\`\`\`tsx
// app/books/page.tsx - 100% SERVER COMPONENT
import db from '@/lib/db';
import { BookListClient } from '@/components/BookListClient';

export default async function BooksPage() {
  // Direct database query on the server - no extra /api endpoint needed!
  const books = await db.query('SELECT * FROM books ORDER BY rating DESC');

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">HK VELORA Books Library</h1>
      {/* Passing server data directly into interactive client component */}
      <BookListClient initialBooks={books} />
    </main>
  );
}
\`\`\`

#### When to use 'use client':
Mark a file with \`'use client'\` **ONLY** when you need:
1. Interactivity: \`onClick\`, \`onChange\`
2. State & Lifecycle: \`useState\`, \`useReducer\`, \`useEffect\`
3. Browser APIs: \`localStorage\`, \`window\`, \`navigator\``,
        realWorldUse: 'Drives lightning-fast load times at enterprise companies like Vercel, TikTok, Notion, and Airbnb.',
        exercise: 'Build a server-rendered book detail page with an interactive client-side bookmark button using Server Actions.'
      }
    ],
    studyNotes: [
      'Never import secrets or database connection strings inside files marked with "use client" to avoid leaking credentials to the browser.',
      'Use revalidateTag() for fine-grained cache purging rather than wiping the entire site cache.'
    ]
  },
  {
    id: 'tech-linux-kernel-bash-sysadmin',
    title: 'Linux Command Line, Bash Scripting & System Administration',
    subtitle: 'POSIX Shells, Systemd, File Permissions, Cron Jobs, SSH & Network Troubleshooting',
    author: 'Sunil Joshi & HK VELORA Infrastructure Group',
    authorBio: 'Lead Linux systems administrator and DevOps security engineer at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'Master the Linux operating system from the terminal prompt to kernel diagnostics: pipelines, sed/awk text processing, user/group ACLs, systemd unit files, and iptables/ufw firewalls.',
    shortDescription: 'Bash scripting, Grep/Sed/Awk, Systemd services, Chmod/Chown permissions, and Netstat/SS diagnostics.',
    category: 'Technology & Computers',
    subcategory: 'Linux & Sysadmin',
    coverGradient: 'from-amber-950 via-stone-900 to-neutral-950',
    pages: 360,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 310,
    price: 0,
    isFree: true,
    tags: ['Linux', 'Bash', 'Sysadmin', 'Systemd', 'Shell Scripting', 'DevOps', 'CLI'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Systems Administration & Linux Kernel Desk',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'The Linux Philosophy: Small Tools, Text Streams, Standard Streams (stdin, stdout, stderr) & Pipes',
      'Advanced File Navigation & Search: find, locate, xargs and regex pattern matching with grep',
      'Text Transformation Superpowers: Stream Editor (sed) and Pattern Scanning & Processing (awk)',
      'Linux Permissions Deep Dive: Octal Notation (755, 644), SUID, SGID, Sticky Bits and Access Control Lists (ACLs)',
      'Process Management: Signals (SIGTERM, SIGKILL), htop, nice, ps aux and Background Job Control (nohup, &)',
      'Modern Init Systems: systemctl, Writing Custom Systemd Service & Timer Units',
      'Network Diagnostics: ip, ss, netstat, curl, dig, traceroute and Packet Inspection with tcpdump',
      'Writing Robust Production Bash Scripts: set -euo pipefail, trap signals, functions and automated backups'
    ],
    chaptersPreview: [
      {
        title: 'Writing Robust Production Bash Scripts: Defensive Shell Engineering',
        summary: 'Why amateur bash scripts cause silent data loss, and how to write battle-tested shell automation using strict error handling flags.',
        keyPoints: [
          'set -e: Immediately exits script if any command returns a non-zero exit status.',
          'set -u: Treats unset variables as an error and exits immediately (prevents accidental rm -rf /$UNSET_VAR).',
          'set -o pipefail: Ensures a pipeline returns the exit code of the last command to fail, rather than the final command.',
          'trap function EXIT: Guaranteed cleanup handler executed on normal exit, error exit, or termination signals.'
        ],
        content: `### Defensive Bash Scripting Template

The standard template every senior sysadmin puts at the top of production scripts:

\`\`\`bash
#!/usr/bin/env bash
# Strict error handling flags
set -euo pipefail
IFS=$'\\n\\t'

# Guaranteed cleanup on exit
cleanup() {
  local exit_code=$?
  echo "[INFO] Cleaning temporary scratch files..."
  rm -f /tmp/hkvelora_deploy_$$.tmp
  exit "$exit_code"
}
trap cleanup EXIT INT TERM

echo "[INFO] Starting database automated backup..."
BACKUP_DIR="/var/backups/hkvelora"
mkdir -p "$BACKUP_DIR"

# Safe execution
pg_dump -U postgres hkvelora_db | gzip > "$BACKUP_DIR/db_\$(date +%F).sql.gz"
echo "[SUCCESS] Backup completed successfully!"
\`\`\`

#### Why "set -o pipefail" Saves Systems:
Consider: \`cat missing_file.txt | grep "user"\`
Without pipefail, grep succeeds (returns 0 for EOF), masking the fact that \`cat\` failed to find the file! \`set -o pipefail\` guarantees the pipeline fails if \`cat\` fails.`,
        realWorldUse: 'Used across cloud infrastructure automation, CI/CD runners, and automated database backup routines.',
        exercise: 'Write a Bash script that scans a directory, compresses files older than 30 days, and logs the operation to /var/log/archive.log.'
      }
    ],
    studyNotes: [
      'Octal permissions: r=4, w=2, x=1. 755 = rwxr-xr-x (Owner can read/write/exec, group and others can read/exec).',
      'Systemd timers are modern, reliable replacements for legacy crontab jobs with built-in logging via journalctl.'
    ]
  },
  {
    id: 'tech-computer-networks-handbook',
    title: 'Computer Networks & TCP/IP Architecture Handbook',
    subtitle: 'OSI 7 Layers, TCP Handshakes, Flow Control, DNS, HTTP/3 QUIC & Routing Algorithms',
    author: 'Dr. Vivek Saxena & HK VELORA Networks Lab',
    authorBio: 'Computer science professor, network architect, and IETF protocol contributor at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Technology Series',
    description: 'The definitive networking reference for software engineers and systems architects. Understand byte-by-byte how data travels across routers, switches, optical fiber, and wireless links.',
    shortDescription: 'OSI vs TCP/IP model, TCP 3-Way Handshake, Congestion Control (Cubic/BBR), DNS resolution, and HTTP/3 QUIC.',
    category: 'Technology & Computers',
    subcategory: 'Computer Networks',
    coverGradient: 'from-blue-950 via-slate-900 to-slate-950',
    pages: 350,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 295,
    price: 0,
    isFree: true,
    tags: ['Computer Networks', 'TCP/IP', 'DNS', 'HTTP3', 'QUIC', 'Routing', 'OSI Model'],
    language: 'English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Networking & Communications Department',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Layered Architectures: OSI 7-Layer Model vs Practical TCP/IP 4-Layer Stack',
      'Physical & Data Link Layers: Framing, MAC Addresses, CSMA/CD and Ethernet Switches',
      'Network Layer & IP: IPv4 Subnetting (CIDR), IPv6 Transition, ARP, ICMP and NAT Traversal',
      'Routing Protocols: Distance Vector (RIP), Link State (OSPF) and Path Vector Exterior Gateway (BGP)',
      'Transport Layer: TCP vs UDP, Sequence/ACK Numbers, TCP 3-Way Handshake & 4-Way Teardown',
      'Flow & Congestion Control: Sliding Window, Slow Start, AIMD, TCP Cubic and Google BBR',
      'Application Protocols: Recursive DNS Resolution, TLS 1.3 Handshake, HTTP/1.1 vs HTTP/2 Multiplexing',
      'The Next-Gen Internet: HTTP/3 over QUIC (UDP), Zero-RTT Reconnection and Head-of-Line Blocking Solution'
    ],
    chaptersPreview: [
      {
        title: 'TCP 3-Way Handshake & Flow Control: Sliding Window Protocol',
        summary: 'Examine how TCP guarantees ordered, reliable, and byte-stream integrity over fundamentally unreliable IP networks.',
        keyPoints: [
          'TCP establishes connections via SYN -> SYN-ACK -> ACK exchange before any payload data is transmitted.',
          'Sequence Numbers (SEQ) track the byte offset of transmitted data; Acknowledgment Numbers (ACK) indicate the next expected byte.',
          'Sliding Window: The receiver advertises its available buffer space (rwnd); the sender never transmits more bytes than rwnd.',
          'Head-of-line blocking: In TCP, if packet #2 is lost, packets #3, #4, #5 cannot be delivered to the application until #2 is retransmitted.'
        ],
        content: `### The Mechanics of the TCP 3-Way Handshake

TCP (Transmission Control Protocol) is connection-oriented. Before client and server exchange HTTP payloads, they synchronize sequence numbers:

\`\`\`
Client                               Server
  |                                     |
  | -------- SYN (seq = X) -----------> |  Step 1: Client proposes random sequence X
  |                                     |
  | <------- SYN-ACK (seq = Y, -------- |  Step 2: Server acknowledges X+1,
  |                    ack = X+1) ----- |          and proposes sequence Y
  |                                     |
  | -------- ACK (seq = X+1, ---------> |  Step 3: Client acknowledges Y+1
  |               ack = Y+1) ---------- |  (Connection ESTABLISHED!)
  |                                     |
\`\`\`

#### Why HTTP/3 Switched from TCP to UDP (QUIC):
Under HTTP/2 over TCP, if a single packet is dropped by Wi-Fi interference, TCP halts **all** streams until that missing packet is retransmitted (TCP Head-of-Line Blocking).

**HTTP/3 runs on QUIC (over UDP)**: Each HTTP request is an independent stream inside QUIC. A dropped packet on stream A never blocks or pauses stream B or C!`,
        realWorldUse: 'Fundamental knowledge for cloud architects, backend developers, and site reliability engineers (SREs).',
        exercise: 'Calculate the maximum usable IP host addresses in a /27 subnet mask and identify the network and broadcast addresses.'
      }
    ],
    studyNotes: [
      'CIDR /24 = 256 IP addresses (254 usable hosts: .0 is network ID, .255 is broadcast).',
      'DNS resolution hierarchy: Root Servers (.) -> TLD Name Servers (.com) -> Authoritative Name Servers.'
    ]
  }
];

