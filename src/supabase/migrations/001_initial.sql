-- Categorias
create table categorias (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  slug text unique not null,
  orden int default 0
);

-- Materiales
create table materiales (
  id uuid primary key default gen_random_uuid(),
  nombre text not null
);

-- Productos
create table productos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  descripcion text,
  precio_desde numeric,
  destacado boolean default false,
  activo boolean default true,
  created_at timestamptz default now()
);

-- Relacion productos <-> categorias
create table producto_categorias (
  producto_id uuid references productos(id) on delete cascade,
  categoria_id uuid references categorias(id) on delete cascade,
  primary key (producto_id, categoria_id)
);

-- Relacion productos <-> materiales
create table producto_materiales (
  producto_id uuid references productos(id) on delete cascade,
  material_id uuid references materiales(id) on delete cascade,
  primary key (producto_id, material_id)
);

-- Fotos y videos
create table producto_fotos (
  id uuid primary key default gen_random_uuid(),
  producto_id uuid references productos(id) on delete cascade,
  path text not null,
  tipo text not null,
  mime_type text,
  es_principal boolean default false,
  orden int default 0
);

-- Datos iniciales de categorias
insert into categorias (nombre, slug, orden) values
  ('Tocados', 'tocados', 1),
  ('Pins', 'pins', 2),
  ('Guías', 'guias', 3),
  ('Velos', 'velos', 4);
