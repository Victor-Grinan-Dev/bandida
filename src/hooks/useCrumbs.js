import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * @returns {Array} An array of breadcrumb objects, each containing a label and a path.
 */

export function useCrumbs() {
  const location = useLocation();

  const crumbs = useMemo(() => {
    const paths = location.pathname.split('/').filter(Boolean);
    let fullPath = '';
    return paths.map((part) => {
      fullPath += `/${part}`;
      return { label: part, path: fullPath };
    });
  }, [location]);

  return crumbs;
}

/**
 * 
 * @example
 * const crumbs = useCrumbs();  
 * 
 * crumbs will be an array of objects like:
 * [
 *   { label: 'galleria', path: '/galleria' },
 *   { label: 'pienet-tatuointi', path: '/galleria/pienet-tatuointi' }
 * ]
 * 
 * <nav>
 *   {crumbs.map((c, i) => (
 *     <span key={i}>
 *       <Link to={c.path}>{c.label}</Link>
 *       {i < crumbs.length - 1 && ' / '}
 *     </span>
 *   ))}
 * </nav>
 * 
 */