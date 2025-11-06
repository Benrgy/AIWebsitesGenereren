/**
 * Utility functions for exporting batch and variation data
 */

interface ExportVariation {
  id: string;
  heading: string;
  hero_statement: string;
  features: string;
  benefits: string;
  style: string;
  color_scheme: string;
  language: string;
  contact_email: string;
  cta_link: string;
  status: string;
  live_url: string | null;
  github_repo_url: string | null;
  error_message: string | null;
  created_at: string;
  submitted_at: string | null;
  completed_at: string | null;
}

interface ExportBatch {
  id: string;
  keyword: string;
  num_variations: number;
  language: string;
  status: string;
  contact_email: string;
  cta_link: string;
  created_at: string;
}

/**
 * Convert variations to CSV format
 */
export const exportVariationsToCSV = (variations: ExportVariation[], batchInfo?: ExportBatch): string => {
  if (variations.length === 0) return '';

  // Define CSV headers
  const headers = [
    'Heading',
    'Hero Statement',
    'Features',
    'Benefits',
    'Style',
    'Color Scheme',
    'Language',
    'Status',
    'Live URL',
    'GitHub Repo',
    'Contact Email',
    'CTA Link',
    'Error Message',
    'Created At',
    'Submitted At',
    'Completed At',
  ];

  // Escape CSV values
  const escapeCSV = (value: any): string => {
    if (value === null || value === undefined) return '';
    const stringValue = String(value);
    // Escape quotes and wrap in quotes if contains comma, quote, or newline
    if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  };

  // Build CSV rows
  const rows = variations.map(v => [
    escapeCSV(v.heading),
    escapeCSV(v.hero_statement),
    escapeCSV(v.features),
    escapeCSV(v.benefits),
    escapeCSV(v.style),
    escapeCSV(v.color_scheme),
    escapeCSV(v.language),
    escapeCSV(v.status),
    escapeCSV(v.live_url),
    escapeCSV(v.github_repo_url),
    escapeCSV(v.contact_email),
    escapeCSV(v.cta_link),
    escapeCSV(v.error_message),
    escapeCSV(new Date(v.created_at).toLocaleString()),
    escapeCSV(v.submitted_at ? new Date(v.submitted_at).toLocaleString() : ''),
    escapeCSV(v.completed_at ? new Date(v.completed_at).toLocaleString() : ''),
  ]);

  // Add batch info header if provided
  let csvContent = '';
  if (batchInfo) {
    csvContent += `# Batch: ${batchInfo.keyword}\n`;
    csvContent += `# Total Variations: ${batchInfo.num_variations}\n`;
    csvContent += `# Language: ${batchInfo.language}\n`;
    csvContent += `# Created: ${new Date(batchInfo.created_at).toLocaleString()}\n`;
    csvContent += '\n';
  }

  csvContent += headers.join(',') + '\n';
  csvContent += rows.map(row => row.join(',')).join('\n');

  return csvContent;
};

/**
 * Convert variations to JSON format
 */
export const exportVariationsToJSON = (variations: ExportVariation[], batchInfo?: ExportBatch): string => {
  const exportData = {
    batch: batchInfo || null,
    exported_at: new Date().toISOString(),
    total_variations: variations.length,
    variations: variations.map(v => ({
      id: v.id,
      heading: v.heading,
      hero_statement: v.hero_statement,
      features: v.features,
      benefits: v.benefits,
      style: v.style,
      color_scheme: v.color_scheme,
      language: v.language,
      status: v.status,
      live_url: v.live_url,
      github_repo_url: v.github_repo_url,
      contact_email: v.contact_email,
      cta_link: v.cta_link,
      error_message: v.error_message,
      created_at: v.created_at,
      submitted_at: v.submitted_at,
      completed_at: v.completed_at,
    })),
  };

  return JSON.stringify(exportData, null, 2);
};

/**
 * Trigger browser download of a file
 */
export const downloadFile = (content: string, filename: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Generate filename for export
 */
export const generateExportFilename = (keyword: string, format: 'csv' | 'json'): string => {
  const sanitizedKeyword = keyword.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const timestamp = new Date().toISOString().split('T')[0];
  return `${sanitizedKeyword}_variations_${timestamp}.${format}`;
};
